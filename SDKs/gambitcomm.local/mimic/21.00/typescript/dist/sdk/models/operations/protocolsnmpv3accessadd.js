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
exports.ProtocolSnmpv3AccessAddResponse = exports.ProtocolSnmpv3AccessAddRequest = exports.ProtocolSnmpv3AccessAddPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolSnmpv3AccessAddPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessAddPathParams, _super);
    function ProtocolSnmpv3AccessAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "agentNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contextMatch" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "contextMatch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupName" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=notifyView" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "notifyView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=prefix" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "prefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=readView" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "readView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=securityLevel" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "securityLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=securityModel" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "securityModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=writeView" }),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddPathParams.prototype, "writeView", void 0);
    return ProtocolSnmpv3AccessAddPathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3AccessAddPathParams = ProtocolSnmpv3AccessAddPathParams;
var ProtocolSnmpv3AccessAddRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessAddRequest, _super);
    function ProtocolSnmpv3AccessAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolSnmpv3AccessAddPathParams)
    ], ProtocolSnmpv3AccessAddRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3AccessAddRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3AccessAddRequest = ProtocolSnmpv3AccessAddRequest;
var ProtocolSnmpv3AccessAddResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3AccessAddResponse, _super);
    function ProtocolSnmpv3AccessAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3AccessAddResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3AccessAddResponse.prototype, "protocolSnmpv3AccessAdd200ApplicationJSONString", void 0);
    return ProtocolSnmpv3AccessAddResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3AccessAddResponse = ProtocolSnmpv3AccessAddResponse;
