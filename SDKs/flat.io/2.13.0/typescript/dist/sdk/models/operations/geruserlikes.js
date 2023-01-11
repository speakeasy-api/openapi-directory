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
exports.GerUserLikesResponse = exports.GerUserLikesRequest = exports.GerUserLikesSecurity = exports.GerUserLikesQueryParams = exports.GerUserLikesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GerUserLikesPathParams = /** @class */ (function (_super) {
    __extends(GerUserLikesPathParams, _super);
    function GerUserLikesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user" }),
        __metadata("design:type", String)
    ], GerUserLikesPathParams.prototype, "user", void 0);
    return GerUserLikesPathParams;
}(utils_1.SpeakeasyBase));
exports.GerUserLikesPathParams = GerUserLikesPathParams;
var GerUserLikesQueryParams = /** @class */ (function (_super) {
    __extends(GerUserLikesQueryParams, _super);
    function GerUserLikesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Boolean)
    ], GerUserLikesQueryParams.prototype, "ids", void 0);
    return GerUserLikesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GerUserLikesQueryParams = GerUserLikesQueryParams;
var GerUserLikesSecurity = /** @class */ (function (_super) {
    __extends(GerUserLikesSecurity, _super);
    function GerUserLikesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GerUserLikesSecurity.prototype, "oAuth2", void 0);
    return GerUserLikesSecurity;
}(utils_1.SpeakeasyBase));
exports.GerUserLikesSecurity = GerUserLikesSecurity;
var GerUserLikesRequest = /** @class */ (function (_super) {
    __extends(GerUserLikesRequest, _super);
    function GerUserLikesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GerUserLikesPathParams)
    ], GerUserLikesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GerUserLikesQueryParams)
    ], GerUserLikesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GerUserLikesSecurity)
    ], GerUserLikesRequest.prototype, "security", void 0);
    return GerUserLikesRequest;
}(utils_1.SpeakeasyBase));
exports.GerUserLikesRequest = GerUserLikesRequest;
var GerUserLikesResponse = /** @class */ (function (_super) {
    __extends(GerUserLikesResponse, _super);
    function GerUserLikesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GerUserLikesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FlatErrorResponse)
    ], GerUserLikesResponse.prototype, "flatErrorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.ScoreDetails }),
        __metadata("design:type", Array)
    ], GerUserLikesResponse.prototype, "scoreDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GerUserLikesResponse.prototype, "statusCode", void 0);
    return GerUserLikesResponse;
}(utils_1.SpeakeasyBase));
exports.GerUserLikesResponse = GerUserLikesResponse;
