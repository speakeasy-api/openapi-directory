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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRecordsRecordIdJsonResponse = exports.GetRecordsRecordIdJsonRequest = exports.GetRecordsRecordIdJsonQueryParams = exports.GetRecordsRecordIdJsonFormatEnum = exports.GetRecordsRecordIdJsonPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRecordsRecordIdJsonPathParams = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonPathParams, _super);
    function GetRecordsRecordIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=record_id" }),
        __metadata("design:type", Number)
    ], GetRecordsRecordIdJsonPathParams.prototype, "recordId", void 0);
    return GetRecordsRecordIdJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRecordsRecordIdJsonPathParams = GetRecordsRecordIdJsonPathParams;
var GetRecordsRecordIdJsonFormatEnum;
(function (GetRecordsRecordIdJsonFormatEnum) {
    GetRecordsRecordIdJsonFormatEnum["Json"] = "json";
    GetRecordsRecordIdJsonFormatEnum["Xml"] = "xml";
})(GetRecordsRecordIdJsonFormatEnum = exports.GetRecordsRecordIdJsonFormatEnum || (exports.GetRecordsRecordIdJsonFormatEnum = {}));
var GetRecordsRecordIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonQueryParams, _super);
    function GetRecordsRecordIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonQueryParams.prototype, "format", void 0);
    return GetRecordsRecordIdJsonQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRecordsRecordIdJsonQueryParams = GetRecordsRecordIdJsonQueryParams;
var GetRecordsRecordIdJsonRequest = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonRequest, _super);
    function GetRecordsRecordIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsRecordIdJsonPathParams)
    ], GetRecordsRecordIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRecordsRecordIdJsonQueryParams)
    ], GetRecordsRecordIdJsonRequest.prototype, "queryParams", void 0);
    return GetRecordsRecordIdJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetRecordsRecordIdJsonRequest = GetRecordsRecordIdJsonRequest;
var GetRecordsRecordIdJsonResponse = /** @class */ (function (_super) {
    __extends(GetRecordsRecordIdJsonResponse, _super);
    function GetRecordsRecordIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRecordsRecordIdJsonResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRecordsRecordIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRecordsRecordIdJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsRecordIdJsonResponse.prototype, "getRecordsRecordIdJSON403ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRecordsRecordIdJsonResponse.prototype, "getRecordsRecordIdJSON404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RecordT)
    ], GetRecordsRecordIdJsonResponse.prototype, "record", void 0);
    return GetRecordsRecordIdJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetRecordsRecordIdJsonResponse = GetRecordsRecordIdJsonResponse;
