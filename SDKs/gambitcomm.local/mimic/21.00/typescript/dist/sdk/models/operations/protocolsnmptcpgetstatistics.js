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
exports.ProtocolSnmptcpGetStatisticsResponse = exports.ProtocolSnmptcpGetStatisticsRequest = exports.ProtocolSnmptcpGetStatisticsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolSnmptcpGetStatisticsPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmptcpGetStatisticsPathParams, _super);
    function ProtocolSnmptcpGetStatisticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmptcpGetStatisticsPathParams.prototype, "agentNum", void 0);
    return ProtocolSnmptcpGetStatisticsPathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmptcpGetStatisticsPathParams = ProtocolSnmptcpGetStatisticsPathParams;
var ProtocolSnmptcpGetStatisticsRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmptcpGetStatisticsRequest, _super);
    function ProtocolSnmptcpGetStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolSnmptcpGetStatisticsPathParams)
    ], ProtocolSnmptcpGetStatisticsRequest.prototype, "pathParams", void 0);
    return ProtocolSnmptcpGetStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmptcpGetStatisticsRequest = ProtocolSnmptcpGetStatisticsRequest;
var ProtocolSnmptcpGetStatisticsResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmptcpGetStatisticsResponse, _super);
    function ProtocolSnmptcpGetStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolSnmptcpGetStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolSnmptcpGetStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ProtocolSnmptcpGetStatisticsResponse.prototype, "protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers", void 0);
    return ProtocolSnmptcpGetStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmptcpGetStatisticsResponse = ProtocolSnmptcpGetStatisticsResponse;
