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
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams.prototype, "scoutingObservationId", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Limit" }),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders.prototype, "xLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Next-Token" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders.prototype, "xNextToken", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest.prototype, "security", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "empty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "scoutingObservationAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse.prototype, "statusCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse;
