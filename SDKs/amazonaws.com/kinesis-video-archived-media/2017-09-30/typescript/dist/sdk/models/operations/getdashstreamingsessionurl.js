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
exports.GetDashStreamingSessionUrlResponse = exports.GetDashStreamingSessionUrlRequest = exports.GetDashStreamingSessionUrlRequestBody = exports.GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum = exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum = exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum = exports.GetDashStreamingSessionUrlRequestBodyDashFragmentSelector = exports.GetDashStreamingSessionUrlHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDashStreamingSessionUrlHeaders = /** @class */ (function (_super) {
    __extends(GetDashStreamingSessionUrlHeaders, _super);
    function GetDashStreamingSessionUrlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDashStreamingSessionUrlHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDashStreamingSessionUrlHeaders = GetDashStreamingSessionUrlHeaders;
// GetDashStreamingSessionUrlRequestBodyDashFragmentSelector
/**
 * Contains the range of timestamps for the requested media, and the source of the timestamps.
**/
var GetDashStreamingSessionUrlRequestBodyDashFragmentSelector = /** @class */ (function (_super) {
    __extends(GetDashStreamingSessionUrlRequestBodyDashFragmentSelector, _super);
    function GetDashStreamingSessionUrlRequestBodyDashFragmentSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FragmentSelectorType" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBodyDashFragmentSelector.prototype, "fragmentSelectorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimestampRange" }),
        __metadata("design:type", shared.DashTimestampRange)
    ], GetDashStreamingSessionUrlRequestBodyDashFragmentSelector.prototype, "timestampRange", void 0);
    return GetDashStreamingSessionUrlRequestBodyDashFragmentSelector;
}(utils_1.SpeakeasyBase));
exports.GetDashStreamingSessionUrlRequestBodyDashFragmentSelector = GetDashStreamingSessionUrlRequestBodyDashFragmentSelector;
var GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum;
(function (GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum) {
    GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum["Always"] = "ALWAYS";
    GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum["Never"] = "NEVER";
})(GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum = exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum || (exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum = {}));
var GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum;
(function (GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum) {
    GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum["Always"] = "ALWAYS";
    GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum["Never"] = "NEVER";
})(GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum = exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum || (exports.GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum = {}));
var GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum;
(function (GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum) {
    GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum["Live"] = "LIVE";
    GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum["LiveReplay"] = "LIVE_REPLAY";
    GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum["OnDemand"] = "ON_DEMAND";
})(GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum = exports.GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum || (exports.GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum = {}));
var GetDashStreamingSessionUrlRequestBody = /** @class */ (function (_super) {
    __extends(GetDashStreamingSessionUrlRequestBody, _super);
    function GetDashStreamingSessionUrlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DASHFragmentSelector" }),
        __metadata("design:type", GetDashStreamingSessionUrlRequestBodyDashFragmentSelector)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "dashFragmentSelector", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisplayFragmentNumber" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "displayFragmentNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DisplayFragmentTimestamp" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "displayFragmentTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Expires" }),
        __metadata("design:type", Number)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "expires", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxManifestFragmentResults" }),
        __metadata("design:type", Number)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "maxManifestFragmentResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PlaybackMode" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "playbackMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "streamARN", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlRequestBody.prototype, "streamName", void 0);
    return GetDashStreamingSessionUrlRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetDashStreamingSessionUrlRequestBody = GetDashStreamingSessionUrlRequestBody;
var GetDashStreamingSessionUrlRequest = /** @class */ (function (_super) {
    __extends(GetDashStreamingSessionUrlRequest, _super);
    function GetDashStreamingSessionUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDashStreamingSessionUrlHeaders)
    ], GetDashStreamingSessionUrlRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetDashStreamingSessionUrlRequestBody)
    ], GetDashStreamingSessionUrlRequest.prototype, "request", void 0);
    return GetDashStreamingSessionUrlRequest;
}(utils_1.SpeakeasyBase));
exports.GetDashStreamingSessionUrlRequest = GetDashStreamingSessionUrlRequest;
var GetDashStreamingSessionUrlResponse = /** @class */ (function (_super) {
    __extends(GetDashStreamingSessionUrlResponse, _super);
    function GetDashStreamingSessionUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDashStreamingSessionUrlResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetDashStreamingSessionUrlOutput)
    ], GetDashStreamingSessionUrlResponse.prototype, "getDASHStreamingSessionURLOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "invalidCodecPrivateDataException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "missingCodecPrivateDataException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "noDataRetentionException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDashStreamingSessionUrlResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDashStreamingSessionUrlResponse.prototype, "unsupportedStreamMediaTypeException", void 0);
    return GetDashStreamingSessionUrlResponse;
}(utils_1.SpeakeasyBase));
exports.GetDashStreamingSessionUrlResponse = GetDashStreamingSessionUrlResponse;
