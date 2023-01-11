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
exports.ProtocolMqttClientSetWilltopicResponse = exports.ProtocolMqttClientSetWilltopicRequest = exports.ProtocolMqttClientSetWilltopicPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolMqttClientSetWilltopicPathParams = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetWilltopicPathParams, _super);
    function ProtocolMqttClientSetWilltopicPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolMqttClientSetWilltopicPathParams.prototype, "agentNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], ProtocolMqttClientSetWilltopicPathParams.prototype, "topic", void 0);
    return ProtocolMqttClientSetWilltopicPathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttClientSetWilltopicPathParams = ProtocolMqttClientSetWilltopicPathParams;
var ProtocolMqttClientSetWilltopicRequest = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetWilltopicRequest, _super);
    function ProtocolMqttClientSetWilltopicRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolMqttClientSetWilltopicPathParams)
    ], ProtocolMqttClientSetWilltopicRequest.prototype, "pathParams", void 0);
    return ProtocolMqttClientSetWilltopicRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttClientSetWilltopicRequest = ProtocolMqttClientSetWilltopicRequest;
var ProtocolMqttClientSetWilltopicResponse = /** @class */ (function (_super) {
    __extends(ProtocolMqttClientSetWilltopicResponse, _super);
    function ProtocolMqttClientSetWilltopicResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolMqttClientSetWilltopicResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolMqttClientSetWilltopicResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ProtocolMqttClientSetWilltopicResponse.prototype, "protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers", void 0);
    return ProtocolMqttClientSetWilltopicResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttClientSetWilltopicResponse = ProtocolMqttClientSetWilltopicResponse;
