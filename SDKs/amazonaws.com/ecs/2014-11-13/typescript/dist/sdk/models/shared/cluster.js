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
exports.Cluster = void 0;
var utils_1 = require("../../../internal/utils");
var attachment_1 = require("./attachment");
var clusterconfiguration_1 = require("./clusterconfiguration");
var capacityproviderstrategyitem_1 = require("./capacityproviderstrategyitem");
var clustersetting_1 = require("./clustersetting");
var keyvaluepair_1 = require("./keyvaluepair");
var tag_1 = require("./tag");
// Cluster
/**
 * A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeServicesCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "activeServicesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: attachment_1.Attachment }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachmentsStatus" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "attachmentsStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capacityProviders" }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "capacityProviders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configuration" }),
        __metadata("design:type", clusterconfiguration_1.ClusterConfiguration)
    ], Cluster.prototype, "configuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultCapacityProviderStrategy", elemType: capacityproviderstrategyitem_1.CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "defaultCapacityProviderStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pendingTasksCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "pendingTasksCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registeredContainerInstancesCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "registeredContainerInstancesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningTasksCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "runningTasksCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings", elemType: clustersetting_1.ClusterSetting }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statistics", elemType: keyvaluepair_1.KeyValuePair }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "statistics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "tags", void 0);
    return Cluster;
}(utils_1.SpeakeasyBase));
exports.Cluster = Cluster;
