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
exports.ReposCreateForkResponse = exports.ReposCreateForkRequest = exports.ReposCreateForkRequestBody = exports.ReposCreateForkQueryParams = exports.ReposCreateForkPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposCreateForkPathParams = /** @class */ (function (_super) {
    __extends(ReposCreateForkPathParams, _super);
    function ReposCreateForkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateForkPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposCreateForkPathParams.prototype, "repo", void 0);
    return ReposCreateForkPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposCreateForkPathParams = ReposCreateForkPathParams;
var ReposCreateForkQueryParams = /** @class */ (function (_super) {
    __extends(ReposCreateForkQueryParams, _super);
    function ReposCreateForkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=org" }),
        __metadata("design:type", String)
    ], ReposCreateForkQueryParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=organization" }),
        __metadata("design:type", String)
    ], ReposCreateForkQueryParams.prototype, "organization", void 0);
    return ReposCreateForkQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReposCreateForkQueryParams = ReposCreateForkQueryParams;
var ReposCreateForkRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateForkRequestBody, _super);
    function ReposCreateForkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], ReposCreateForkRequestBody.prototype, "organization", void 0);
    return ReposCreateForkRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposCreateForkRequestBody = ReposCreateForkRequestBody;
var ReposCreateForkRequest = /** @class */ (function (_super) {
    __extends(ReposCreateForkRequest, _super);
    function ReposCreateForkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposCreateForkPathParams)
    ], ReposCreateForkRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposCreateForkQueryParams)
    ], ReposCreateForkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateForkRequestBody)
    ], ReposCreateForkRequest.prototype, "request", void 0);
    return ReposCreateForkRequest;
}(utils_1.SpeakeasyBase));
exports.ReposCreateForkRequest = ReposCreateForkRequest;
var ReposCreateForkResponse = /** @class */ (function (_super) {
    __extends(ReposCreateForkResponse, _super);
    function ReposCreateForkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposCreateForkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposCreateForkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposCreateForkResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Repository)
    ], ReposCreateForkResponse.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimError)
    ], ReposCreateForkResponse.prototype, "scimError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposCreateForkResponse.prototype, "validationError", void 0);
    return ReposCreateForkResponse;
}(utils_1.SpeakeasyBase));
exports.ReposCreateForkResponse = ReposCreateForkResponse;
