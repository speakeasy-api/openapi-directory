"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeConnectorResponse = void 0;
var utils_1 = require("../../../internal/utils");
var capacitydescription_1 = require("./capacitydescription");
var connectorstateenum_1 = require("./connectorstateenum");
var kafkaclusterdescription_1 = require("./kafkaclusterdescription");
var kafkaclusterclientauthenticationdescription_1 = require("./kafkaclusterclientauthenticationdescription");
var kafkaclusterencryptionintransitdescription_1 = require("./kafkaclusterencryptionintransitdescription");
var logdeliverydescription_1 = require("./logdeliverydescription");
var plugindescription_1 = require("./plugindescription");
var workerconfigurationdescription_1 = require("./workerconfigurationdescription");
var DescribeConnectorResponse = /** @class */ (function (_super) {
    __extends(DescribeConnectorResponse, _super);
    function DescribeConnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capacity" }),
        __metadata("design:type", capacitydescription_1.CapacityDescription)
    ], DescribeConnectorResponse.prototype, "capacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorArn" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorConfiguration" }),
        __metadata("design:type", Object)
    ], DescribeConnectorResponse.prototype, "connectorConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorDescription" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorName" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorState" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "connectorState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationTime" }),
        __metadata("design:type", Date)
    ], DescribeConnectorResponse.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentVersion" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "currentVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kafkaCluster" }),
        __metadata("design:type", kafkaclusterdescription_1.KafkaClusterDescription)
    ], DescribeConnectorResponse.prototype, "kafkaCluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kafkaClusterClientAuthentication" }),
        __metadata("design:type", kafkaclusterclientauthenticationdescription_1.KafkaClusterClientAuthenticationDescription)
    ], DescribeConnectorResponse.prototype, "kafkaClusterClientAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kafkaClusterEncryptionInTransit" }),
        __metadata("design:type", kafkaclusterencryptionintransitdescription_1.KafkaClusterEncryptionInTransitDescription)
    ], DescribeConnectorResponse.prototype, "kafkaClusterEncryptionInTransit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kafkaConnectVersion" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "kafkaConnectVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logDelivery" }),
        __metadata("design:type", logdeliverydescription_1.LogDeliveryDescription)
    ], DescribeConnectorResponse.prototype, "logDelivery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plugins", elemType: plugindescription_1.PluginDescription }),
        __metadata("design:type", Array)
    ], DescribeConnectorResponse.prototype, "plugins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceExecutionRoleArn" }),
        __metadata("design:type", String)
    ], DescribeConnectorResponse.prototype, "serviceExecutionRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workerConfiguration" }),
        __metadata("design:type", workerconfigurationdescription_1.WorkerConfigurationDescription)
    ], DescribeConnectorResponse.prototype, "workerConfiguration", void 0);
    return DescribeConnectorResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeConnectorResponse = DescribeConnectorResponse;
