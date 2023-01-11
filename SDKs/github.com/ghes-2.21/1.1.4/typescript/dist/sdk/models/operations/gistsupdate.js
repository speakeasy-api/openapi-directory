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
exports.GistsUpdateResponse = exports.GistsUpdateRequest = exports.GistsUpdateRequestBody = exports.GistsUpdateRequestBodyFiles = exports.GistsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GistsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GistsUpdatePathParams, _super);
    function GistsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=gist_id" }),
        __metadata("design:type", String)
    ], GistsUpdatePathParams.prototype, "gistId", void 0);
    return GistsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.GistsUpdatePathParams = GistsUpdatePathParams;
var GistsUpdateRequestBodyFiles = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBodyFiles, _super);
    function GistsUpdateRequestBodyFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBodyFiles.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBodyFiles.prototype, "filename", void 0);
    return GistsUpdateRequestBodyFiles;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBodyFiles = GistsUpdateRequestBodyFiles;
var GistsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody, _super);
    function GistsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: GistsUpdateRequestBodyFiles }),
        __metadata("design:type", Object)
    ], GistsUpdateRequestBody.prototype, "files", void 0);
    return GistsUpdateRequestBody;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody = GistsUpdateRequestBody;
var GistsUpdateRequest = /** @class */ (function (_super) {
    __extends(GistsUpdateRequest, _super);
    function GistsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GistsUpdatePathParams)
    ], GistsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GistsUpdateRequestBody)
    ], GistsUpdateRequest.prototype, "request", void 0);
    return GistsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequest = GistsUpdateRequest;
var GistsUpdateResponse = /** @class */ (function (_super) {
    __extends(GistsUpdateResponse, _super);
    function GistsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GistsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GistsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], GistsUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GistSimple)
    ], GistsUpdateResponse.prototype, "gistSimple", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], GistsUpdateResponse.prototype, "validationError", void 0);
    return GistsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateResponse = GistsUpdateResponse;
