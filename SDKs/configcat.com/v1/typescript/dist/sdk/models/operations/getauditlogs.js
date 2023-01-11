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
exports.GetAuditlogsResponse = exports.GetAuditlogsRequest = exports.GetAuditlogsQueryParams = exports.GetAuditlogsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAuditlogsPathParams = /** @class */ (function (_super) {
    __extends(GetAuditlogsPathParams, _super);
    function GetAuditlogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], GetAuditlogsPathParams.prototype, "productId", void 0);
    return GetAuditlogsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAuditlogsPathParams = GetAuditlogsPathParams;
var GetAuditlogsQueryParams = /** @class */ (function (_super) {
    __extends(GetAuditlogsQueryParams, _super);
    function GetAuditlogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=auditLogType" }),
        __metadata("design:type", Object)
    ], GetAuditlogsQueryParams.prototype, "auditLogType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=configId" }),
        __metadata("design:type", String)
    ], GetAuditlogsQueryParams.prototype, "configId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=environmentId" }),
        __metadata("design:type", String)
    ], GetAuditlogsQueryParams.prototype, "environmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromUtcDateTime" }),
        __metadata("design:type", Date)
    ], GetAuditlogsQueryParams.prototype, "fromUtcDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toUtcDateTime" }),
        __metadata("design:type", Date)
    ], GetAuditlogsQueryParams.prototype, "toUtcDateTime", void 0);
    return GetAuditlogsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAuditlogsQueryParams = GetAuditlogsQueryParams;
var GetAuditlogsRequest = /** @class */ (function (_super) {
    __extends(GetAuditlogsRequest, _super);
    function GetAuditlogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAuditlogsPathParams)
    ], GetAuditlogsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAuditlogsQueryParams)
    ], GetAuditlogsRequest.prototype, "queryParams", void 0);
    return GetAuditlogsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAuditlogsRequest = GetAuditlogsRequest;
var GetAuditlogsResponse = /** @class */ (function (_super) {
    __extends(GetAuditlogsResponse, _super);
    function GetAuditlogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.AuditLogItemModel }),
        __metadata("design:type", Array)
    ], GetAuditlogsResponse.prototype, "auditLogItemModels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAuditlogsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAuditlogsResponse.prototype, "statusCode", void 0);
    return GetAuditlogsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAuditlogsResponse = GetAuditlogsResponse;
