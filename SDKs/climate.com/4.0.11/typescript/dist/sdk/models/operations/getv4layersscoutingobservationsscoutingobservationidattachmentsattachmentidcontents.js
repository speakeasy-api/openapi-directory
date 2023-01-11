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
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders = exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=attachmentId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scoutingObservationId" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams.prototype, "scoutingObservationId", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders.prototype, "accept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Range" }),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders.prototype, "range", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity.prototype, "oauth2AuthorizationCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest.prototype, "security", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest;
var GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse = /** @class */ (function (_super) {
    __extends(GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse, _super);
    function GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse.prototype, "statusCode", void 0);
    return GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse = GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse;
