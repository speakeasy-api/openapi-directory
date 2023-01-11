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
exports.ReposReplaceAllTopicsResponse = exports.ReposReplaceAllTopicsRequest = exports.ReposReplaceAllTopics415ApplicationJson = exports.ReposReplaceAllTopicsRequestBody = exports.ReposReplaceAllTopicsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposReplaceAllTopicsPathParams = /** @class */ (function (_super) {
    __extends(ReposReplaceAllTopicsPathParams, _super);
    function ReposReplaceAllTopicsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposReplaceAllTopicsPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposReplaceAllTopicsPathParams.prototype, "repo", void 0);
    return ReposReplaceAllTopicsPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposReplaceAllTopicsPathParams = ReposReplaceAllTopicsPathParams;
var ReposReplaceAllTopicsRequestBody = /** @class */ (function (_super) {
    __extends(ReposReplaceAllTopicsRequestBody, _super);
    function ReposReplaceAllTopicsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names" }),
        __metadata("design:type", Array)
    ], ReposReplaceAllTopicsRequestBody.prototype, "names", void 0);
    return ReposReplaceAllTopicsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposReplaceAllTopicsRequestBody = ReposReplaceAllTopicsRequestBody;
var ReposReplaceAllTopics415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposReplaceAllTopics415ApplicationJson, _super);
    function ReposReplaceAllTopics415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposReplaceAllTopics415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposReplaceAllTopics415ApplicationJson.prototype, "message", void 0);
    return ReposReplaceAllTopics415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReposReplaceAllTopics415ApplicationJson = ReposReplaceAllTopics415ApplicationJson;
var ReposReplaceAllTopicsRequest = /** @class */ (function (_super) {
    __extends(ReposReplaceAllTopicsRequest, _super);
    function ReposReplaceAllTopicsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposReplaceAllTopicsPathParams)
    ], ReposReplaceAllTopicsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposReplaceAllTopicsRequestBody)
    ], ReposReplaceAllTopicsRequest.prototype, "request", void 0);
    return ReposReplaceAllTopicsRequest;
}(utils_1.SpeakeasyBase));
exports.ReposReplaceAllTopicsRequest = ReposReplaceAllTopicsRequest;
var ReposReplaceAllTopicsResponse = /** @class */ (function (_super) {
    __extends(ReposReplaceAllTopicsResponse, _super);
    function ReposReplaceAllTopicsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposReplaceAllTopicsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposReplaceAllTopicsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposReplaceAllTopicsResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposReplaceAllTopics415ApplicationJson)
    ], ReposReplaceAllTopicsResponse.prototype, "reposReplaceAllTopics415ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Topic)
    ], ReposReplaceAllTopicsResponse.prototype, "topic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationErrorSimple)
    ], ReposReplaceAllTopicsResponse.prototype, "validationErrorSimple", void 0);
    return ReposReplaceAllTopicsResponse;
}(utils_1.SpeakeasyBase));
exports.ReposReplaceAllTopicsResponse = ReposReplaceAllTopicsResponse;
