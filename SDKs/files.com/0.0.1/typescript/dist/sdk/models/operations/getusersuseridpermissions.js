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
exports.GetUsersUserIdPermissionsResponse = exports.GetUsersUserIdPermissionsRequest = exports.GetUsersUserIdPermissionsQueryParams = exports.GetUsersUserIdPermissionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUsersUserIdPermissionsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsPathParams, _super);
    function GetUsersUserIdPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsPathParams.prototype, "userId", void 0);
    return GetUsersUserIdPermissionsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdPermissionsPathParams = GetUsersUserIdPermissionsPathParams;
var GetUsersUserIdPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsQueryParams, _super);
    function GetUsersUserIdPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_gt" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterGt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_gteq" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterGteq", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_like" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLike", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_lt" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter_lteq" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "filterLteq", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_groups" }),
        __metadata("design:type", Boolean)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "includeGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Object)
    ], GetUsersUserIdPermissionsQueryParams.prototype, "sortBy", void 0);
    return GetUsersUserIdPermissionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdPermissionsQueryParams = GetUsersUserIdPermissionsQueryParams;
var GetUsersUserIdPermissionsRequest = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsRequest, _super);
    function GetUsersUserIdPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdPermissionsPathParams)
    ], GetUsersUserIdPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersUserIdPermissionsQueryParams)
    ], GetUsersUserIdPermissionsRequest.prototype, "queryParams", void 0);
    return GetUsersUserIdPermissionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdPermissionsRequest = GetUsersUserIdPermissionsRequest;
var GetUsersUserIdPermissionsResponse = /** @class */ (function (_super) {
    __extends(GetUsersUserIdPermissionsResponse, _super);
    function GetUsersUserIdPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersUserIdPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.PermissionEntity }),
        __metadata("design:type", Array)
    ], GetUsersUserIdPermissionsResponse.prototype, "permissionEntities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersUserIdPermissionsResponse.prototype, "statusCode", void 0);
    return GetUsersUserIdPermissionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersUserIdPermissionsResponse = GetUsersUserIdPermissionsResponse;
