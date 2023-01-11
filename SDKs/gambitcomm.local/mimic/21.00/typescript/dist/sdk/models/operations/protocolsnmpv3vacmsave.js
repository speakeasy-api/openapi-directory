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
exports.ProtocolSnmpv3VacmSaveResponse = exports.ProtocolSnmpv3VacmSaveRequest = exports.ProtocolSnmpv3VacmSavePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ProtocolSnmpv3VacmSavePathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3VacmSavePathParams, _super);
    function ProtocolSnmpv3VacmSavePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3VacmSavePathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3VacmSavePathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3VacmSavePathParams = ProtocolSnmpv3VacmSavePathParams;
var ProtocolSnmpv3VacmSaveRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3VacmSaveRequest, _super);
    function ProtocolSnmpv3VacmSaveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolSnmpv3VacmSavePathParams)
    ], ProtocolSnmpv3VacmSaveRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3VacmSaveRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3VacmSaveRequest = ProtocolSnmpv3VacmSaveRequest;
var ProtocolSnmpv3VacmSaveResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3VacmSaveResponse, _super);
    function ProtocolSnmpv3VacmSaveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3VacmSaveResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3VacmSaveResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ProtocolSnmpv3VacmSaveResponse.prototype, "protocolSnmpv3VacmSave200ApplicationJSONStrings", void 0);
    return ProtocolSnmpv3VacmSaveResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3VacmSaveResponse = ProtocolSnmpv3VacmSaveResponse;
