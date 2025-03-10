"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GistsUpdateResponse = exports.GistsUpdateRequest = exports.GistsUpdateRequestBody1 = exports.GistsUpdateRequestBody1Files1 = exports.GistsUpdateRequestBody1Files2 = exports.GistsUpdateRequestBody1Files3 = exports.GistsUpdateRequestBody2 = exports.GistsUpdateRequestBody2Files1 = exports.GistsUpdateRequestBody2Files2 = exports.GistsUpdateRequestBody2Files3 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var GistsUpdateRequestBody2Files3 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody2Files3, _super);
    function GistsUpdateRequestBody2Files3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files3.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files3.prototype, "filename", void 0);
    return GistsUpdateRequestBody2Files3;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody2Files3 = GistsUpdateRequestBody2Files3;
var GistsUpdateRequestBody2Files2 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody2Files2, _super);
    function GistsUpdateRequestBody2Files2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files2.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files2.prototype, "filename", void 0);
    return GistsUpdateRequestBody2Files2;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody2Files2 = GistsUpdateRequestBody2Files2;
var GistsUpdateRequestBody2Files1 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody2Files1, _super);
    function GistsUpdateRequestBody2Files1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files1.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2Files1.prototype, "filename", void 0);
    return GistsUpdateRequestBody2Files1;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody2Files1 = GistsUpdateRequestBody2Files1;
var GistsUpdateRequestBody2 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody2, _super);
    function GistsUpdateRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody2.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "files" }),
        __metadata("design:type", Object)
    ], GistsUpdateRequestBody2.prototype, "files", void 0);
    return GistsUpdateRequestBody2;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody2 = GistsUpdateRequestBody2;
var GistsUpdateRequestBody1Files3 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody1Files3, _super);
    function GistsUpdateRequestBody1Files3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files3.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files3.prototype, "filename", void 0);
    return GistsUpdateRequestBody1Files3;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody1Files3 = GistsUpdateRequestBody1Files3;
var GistsUpdateRequestBody1Files2 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody1Files2, _super);
    function GistsUpdateRequestBody1Files2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files2.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files2.prototype, "filename", void 0);
    return GistsUpdateRequestBody1Files2;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody1Files2 = GistsUpdateRequestBody1Files2;
var GistsUpdateRequestBody1Files1 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody1Files1, _super);
    function GistsUpdateRequestBody1Files1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files1.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filename" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1Files1.prototype, "filename", void 0);
    return GistsUpdateRequestBody1Files1;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody1Files1 = GistsUpdateRequestBody1Files1;
var GistsUpdateRequestBody1 = /** @class */ (function (_super) {
    __extends(GistsUpdateRequestBody1, _super);
    function GistsUpdateRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], GistsUpdateRequestBody1.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "files" }),
        __metadata("design:type", Object)
    ], GistsUpdateRequestBody1.prototype, "files", void 0);
    return GistsUpdateRequestBody1;
}(utils_1.SpeakeasyBase));
exports.GistsUpdateRequestBody1 = GistsUpdateRequestBody1;
var GistsUpdateRequest = /** @class */ (function (_super) {
    __extends(GistsUpdateRequest, _super);
    function GistsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], GistsUpdateRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=gist_id",
        }),
        __metadata("design:type", String)
    ], GistsUpdateRequest.prototype, "gistId", void 0);
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
        __metadata("design:type", Object)
    ], GistsUpdateResponse.prototype, "rawResponse", void 0);
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
