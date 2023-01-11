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
exports.ProtocolProxyPortStopResponse = exports.ProtocolProxyPortStopRequest = exports.ProtocolProxyPortStopPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolProxyPortStopPathParams = /** @class */ (function (_super) {
    __extends(ProtocolProxyPortStopPathParams, _super);
    function ProtocolProxyPortStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolProxyPortStopPathParams.prototype, "agentNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=port" }),
        __metadata("design:type", Number)
    ], ProtocolProxyPortStopPathParams.prototype, "port", void 0);
    return ProtocolProxyPortStopPathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolProxyPortStopPathParams = ProtocolProxyPortStopPathParams;
var ProtocolProxyPortStopRequest = /** @class */ (function (_super) {
    __extends(ProtocolProxyPortStopRequest, _super);
    function ProtocolProxyPortStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolProxyPortStopPathParams)
    ], ProtocolProxyPortStopRequest.prototype, "pathParams", void 0);
    return ProtocolProxyPortStopRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolProxyPortStopRequest = ProtocolProxyPortStopRequest;
var ProtocolProxyPortStopResponse = /** @class */ (function (_super) {
    __extends(ProtocolProxyPortStopResponse, _super);
    function ProtocolProxyPortStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolProxyPortStopResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolProxyPortStopResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolProxyPortStopResponse.prototype, "protocolProxyPortStop200ApplicationJSONString", void 0);
    return ProtocolProxyPortStopResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolProxyPortStopResponse = ProtocolProxyPortStopResponse;
