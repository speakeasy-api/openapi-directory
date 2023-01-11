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
exports.PrivateProjectsListResponse = exports.PrivateProjectsListRequest = exports.PrivateProjectsListSecurity = exports.PrivateProjectsListQueryParams = exports.PrivateProjectsListStorageEnum = exports.PrivateProjectsListOrderDirectionEnum = exports.PrivateProjectsListOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PrivateProjectsListOrderEnum;
(function (PrivateProjectsListOrderEnum) {
    PrivateProjectsListOrderEnum["PublishedDate"] = "published_date";
    PrivateProjectsListOrderEnum["ModifiedDate"] = "modified_date";
    PrivateProjectsListOrderEnum["Views"] = "views";
})(PrivateProjectsListOrderEnum = exports.PrivateProjectsListOrderEnum || (exports.PrivateProjectsListOrderEnum = {}));
var PrivateProjectsListOrderDirectionEnum;
(function (PrivateProjectsListOrderDirectionEnum) {
    PrivateProjectsListOrderDirectionEnum["Asc"] = "asc";
    PrivateProjectsListOrderDirectionEnum["Desc"] = "desc";
})(PrivateProjectsListOrderDirectionEnum = exports.PrivateProjectsListOrderDirectionEnum || (exports.PrivateProjectsListOrderDirectionEnum = {}));
var PrivateProjectsListStorageEnum;
(function (PrivateProjectsListStorageEnum) {
    PrivateProjectsListStorageEnum["Group"] = "group";
    PrivateProjectsListStorageEnum["Individual"] = "individual";
})(PrivateProjectsListStorageEnum = exports.PrivateProjectsListStorageEnum || (exports.PrivateProjectsListStorageEnum = {}));
var PrivateProjectsListQueryParams = /** @class */ (function (_super) {
    __extends(PrivateProjectsListQueryParams, _super);
    function PrivateProjectsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], PrivateProjectsListQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], PrivateProjectsListQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], PrivateProjectsListQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order_direction" }),
        __metadata("design:type", String)
    ], PrivateProjectsListQueryParams.prototype, "orderDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PrivateProjectsListQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PrivateProjectsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=roles" }),
        __metadata("design:type", String)
    ], PrivateProjectsListQueryParams.prototype, "roles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=storage" }),
        __metadata("design:type", String)
    ], PrivateProjectsListQueryParams.prototype, "storage", void 0);
    return PrivateProjectsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PrivateProjectsListQueryParams = PrivateProjectsListQueryParams;
var PrivateProjectsListSecurity = /** @class */ (function (_super) {
    __extends(PrivateProjectsListSecurity, _super);
    function PrivateProjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PrivateProjectsListSecurity.prototype, "oAuth2", void 0);
    return PrivateProjectsListSecurity;
}(utils_1.SpeakeasyBase));
exports.PrivateProjectsListSecurity = PrivateProjectsListSecurity;
var PrivateProjectsListRequest = /** @class */ (function (_super) {
    __extends(PrivateProjectsListRequest, _super);
    function PrivateProjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrivateProjectsListQueryParams)
    ], PrivateProjectsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrivateProjectsListSecurity)
    ], PrivateProjectsListRequest.prototype, "security", void 0);
    return PrivateProjectsListRequest;
}(utils_1.SpeakeasyBase));
exports.PrivateProjectsListRequest = PrivateProjectsListRequest;
var PrivateProjectsListResponse = /** @class */ (function (_super) {
    __extends(PrivateProjectsListResponse, _super);
    function PrivateProjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PrivateProjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorMessage)
    ], PrivateProjectsListResponse.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.ProjectPrivate }),
        __metadata("design:type", Array)
    ], PrivateProjectsListResponse.prototype, "projectPrivates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PrivateProjectsListResponse.prototype, "statusCode", void 0);
    return PrivateProjectsListResponse;
}(utils_1.SpeakeasyBase));
exports.PrivateProjectsListResponse = PrivateProjectsListResponse;
