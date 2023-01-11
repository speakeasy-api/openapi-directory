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
exports.CompanyIdAnnouncementsResponse = exports.CompanyIdAnnouncementsRequest = exports.CompanyIdAnnouncementsSecurity = exports.CompanyIdAnnouncementsQueryParams = exports.CompanyIdAnnouncementsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CompanyIdAnnouncementsPathParams = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsPathParams, _super);
    function CompanyIdAnnouncementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompanyIdAnnouncementsPathParams.prototype, "id", void 0);
    return CompanyIdAnnouncementsPathParams;
}(utils_1.SpeakeasyBase));
exports.CompanyIdAnnouncementsPathParams = CompanyIdAnnouncementsPathParams;
var CompanyIdAnnouncementsQueryParams = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsQueryParams, _super);
    function CompanyIdAnnouncementsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=data" }),
        __metadata("design:type", Boolean)
    ], CompanyIdAnnouncementsQueryParams.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsQueryParams.prototype, "offset", void 0);
    return CompanyIdAnnouncementsQueryParams;
}(utils_1.SpeakeasyBase));
exports.CompanyIdAnnouncementsQueryParams = CompanyIdAnnouncementsQueryParams;
var CompanyIdAnnouncementsSecurity = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsSecurity, _super);
    function CompanyIdAnnouncementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyIdAnnouncementsSecurity.prototype, "userKey", void 0);
    return CompanyIdAnnouncementsSecurity;
}(utils_1.SpeakeasyBase));
exports.CompanyIdAnnouncementsSecurity = CompanyIdAnnouncementsSecurity;
var CompanyIdAnnouncementsRequest = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsRequest, _super);
    function CompanyIdAnnouncementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdAnnouncementsPathParams)
    ], CompanyIdAnnouncementsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdAnnouncementsQueryParams)
    ], CompanyIdAnnouncementsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdAnnouncementsSecurity)
    ], CompanyIdAnnouncementsRequest.prototype, "security", void 0);
    return CompanyIdAnnouncementsRequest;
}(utils_1.SpeakeasyBase));
exports.CompanyIdAnnouncementsRequest = CompanyIdAnnouncementsRequest;
var CompanyIdAnnouncementsResponse = /** @class */ (function (_super) {
    __extends(CompanyIdAnnouncementsResponse, _super);
    function CompanyIdAnnouncementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], CompanyIdAnnouncementsResponse.prototype, "companyIdAnnouncements200ApplicationJSONAnies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CompanyIdAnnouncementsResponse.prototype, "companyIdAnnouncementsDefaultApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CompanyIdAnnouncementsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CompanyIdAnnouncementsResponse.prototype, "statusCode", void 0);
    return CompanyIdAnnouncementsResponse;
}(utils_1.SpeakeasyBase));
exports.CompanyIdAnnouncementsResponse = CompanyIdAnnouncementsResponse;
