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
exports.DeleteSubmissionCommentResponse = exports.DeleteSubmissionCommentRequest = exports.DeleteSubmissionCommentSecurity = exports.DeleteSubmissionCommentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteSubmissionCommentPathParams = /** @class */ (function (_super) {
    __extends(DeleteSubmissionCommentPathParams, _super);
    function DeleteSubmissionCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=assignment" }),
        __metadata("design:type", String)
    ], DeleteSubmissionCommentPathParams.prototype, "assignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=class" }),
        __metadata("design:type", String)
    ], DeleteSubmissionCommentPathParams.prototype, "class", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=comment" }),
        __metadata("design:type", String)
    ], DeleteSubmissionCommentPathParams.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=submission" }),
        __metadata("design:type", String)
    ], DeleteSubmissionCommentPathParams.prototype, "submission", void 0);
    return DeleteSubmissionCommentPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteSubmissionCommentPathParams = DeleteSubmissionCommentPathParams;
var DeleteSubmissionCommentSecurity = /** @class */ (function (_super) {
    __extends(DeleteSubmissionCommentSecurity, _super);
    function DeleteSubmissionCommentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteSubmissionCommentSecurity.prototype, "oAuth2", void 0);
    return DeleteSubmissionCommentSecurity;
}(utils_1.SpeakeasyBase));
exports.DeleteSubmissionCommentSecurity = DeleteSubmissionCommentSecurity;
var DeleteSubmissionCommentRequest = /** @class */ (function (_super) {
    __extends(DeleteSubmissionCommentRequest, _super);
    function DeleteSubmissionCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSubmissionCommentPathParams)
    ], DeleteSubmissionCommentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteSubmissionCommentSecurity)
    ], DeleteSubmissionCommentRequest.prototype, "security", void 0);
    return DeleteSubmissionCommentRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteSubmissionCommentRequest = DeleteSubmissionCommentRequest;
var DeleteSubmissionCommentResponse = /** @class */ (function (_super) {
    __extends(DeleteSubmissionCommentResponse, _super);
    function DeleteSubmissionCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteSubmissionCommentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FlatErrorResponse)
    ], DeleteSubmissionCommentResponse.prototype, "flatErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteSubmissionCommentResponse.prototype, "statusCode", void 0);
    return DeleteSubmissionCommentResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteSubmissionCommentResponse = DeleteSubmissionCommentResponse;
