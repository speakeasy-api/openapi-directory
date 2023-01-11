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
exports.GistsCreateResponse = exports.GistsCreateRequest = exports.GistsCreateRequestBody = exports.GistsCreateRequestBodyPublic2Enum = exports.GistsCreateRequestBodyFiles = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GistsCreateRequestBodyFiles = /** @class */ (function (_super) {
    __extends(GistsCreateRequestBodyFiles, _super);
    function GistsCreateRequestBodyFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GistsCreateRequestBodyFiles.prototype, "content", void 0);
    return GistsCreateRequestBodyFiles;
}(utils_1.SpeakeasyBase));
exports.GistsCreateRequestBodyFiles = GistsCreateRequestBodyFiles;
var GistsCreateRequestBodyPublic2Enum;
(function (GistsCreateRequestBodyPublic2Enum) {
    GistsCreateRequestBodyPublic2Enum["True"] = "true";
    GistsCreateRequestBodyPublic2Enum["False"] = "false";
})(GistsCreateRequestBodyPublic2Enum = exports.GistsCreateRequestBodyPublic2Enum || (exports.GistsCreateRequestBodyPublic2Enum = {}));
var GistsCreateRequestBody = /** @class */ (function (_super) {
    __extends(GistsCreateRequestBody, _super);
    function GistsCreateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GistsCreateRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: GistsCreateRequestBodyFiles }),
        __metadata("design:type", Object)
    ], GistsCreateRequestBody.prototype, "files", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Object)
    ], GistsCreateRequestBody.prototype, "public", void 0);
    return GistsCreateRequestBody;
}(utils_1.SpeakeasyBase));
exports.GistsCreateRequestBody = GistsCreateRequestBody;
var GistsCreateRequest = /** @class */ (function (_super) {
    __extends(GistsCreateRequest, _super);
    function GistsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GistsCreateRequestBody)
    ], GistsCreateRequest.prototype, "request", void 0);
    return GistsCreateRequest;
}(utils_1.SpeakeasyBase));
exports.GistsCreateRequest = GistsCreateRequest;
var GistsCreateResponse = /** @class */ (function (_super) {
    __extends(GistsCreateResponse, _super);
    function GistsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GistsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GistsCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GistsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], GistsCreateResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GistSimple)
    ], GistsCreateResponse.prototype, "gistSimple", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], GistsCreateResponse.prototype, "validationError", void 0);
    return GistsCreateResponse;
}(utils_1.SpeakeasyBase));
exports.GistsCreateResponse = GistsCreateResponse;
