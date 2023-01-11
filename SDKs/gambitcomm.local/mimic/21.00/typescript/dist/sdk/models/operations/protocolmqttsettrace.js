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
exports.ProtocolMqttSetTraceResponse = exports.ProtocolMqttSetTraceRequest = exports.ProtocolMqttSetTracePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolMqttSetTracePathParams = /** @class */ (function (_super) {
    __extends(ProtocolMqttSetTracePathParams, _super);
    function ProtocolMqttSetTracePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolMqttSetTracePathParams.prototype, "agentNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=enableOrNot" }),
        __metadata("design:type", String)
    ], ProtocolMqttSetTracePathParams.prototype, "enableOrNot", void 0);
    return ProtocolMqttSetTracePathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttSetTracePathParams = ProtocolMqttSetTracePathParams;
var ProtocolMqttSetTraceRequest = /** @class */ (function (_super) {
    __extends(ProtocolMqttSetTraceRequest, _super);
    function ProtocolMqttSetTraceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolMqttSetTracePathParams)
    ], ProtocolMqttSetTraceRequest.prototype, "pathParams", void 0);
    return ProtocolMqttSetTraceRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttSetTraceRequest = ProtocolMqttSetTraceRequest;
var ProtocolMqttSetTraceResponse = /** @class */ (function (_super) {
    __extends(ProtocolMqttSetTraceResponse, _super);
    function ProtocolMqttSetTraceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolMqttSetTraceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolMqttSetTraceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolMqttSetTraceResponse.prototype, "protocolMqttSetTrace200ApplicationJSONString", void 0);
    return ProtocolMqttSetTraceResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolMqttSetTraceResponse = ProtocolMqttSetTraceResponse;
