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
exports.ReposListForAuthenticatedUserResponse = exports.ReposListForAuthenticatedUserRequest = exports.ReposListForAuthenticatedUserQueryParams = exports.ReposListForAuthenticatedUserVisibilityEnum = exports.ReposListForAuthenticatedUserTypeEnum = exports.ReposListForAuthenticatedUserSortEnum = exports.ReposListForAuthenticatedUserDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposListForAuthenticatedUserDirectionEnum;
(function (ReposListForAuthenticatedUserDirectionEnum) {
    ReposListForAuthenticatedUserDirectionEnum["Asc"] = "asc";
    ReposListForAuthenticatedUserDirectionEnum["Desc"] = "desc";
})(ReposListForAuthenticatedUserDirectionEnum = exports.ReposListForAuthenticatedUserDirectionEnum || (exports.ReposListForAuthenticatedUserDirectionEnum = {}));
var ReposListForAuthenticatedUserSortEnum;
(function (ReposListForAuthenticatedUserSortEnum) {
    ReposListForAuthenticatedUserSortEnum["Created"] = "created";
    ReposListForAuthenticatedUserSortEnum["Updated"] = "updated";
    ReposListForAuthenticatedUserSortEnum["Pushed"] = "pushed";
    ReposListForAuthenticatedUserSortEnum["FullName"] = "full_name";
})(ReposListForAuthenticatedUserSortEnum = exports.ReposListForAuthenticatedUserSortEnum || (exports.ReposListForAuthenticatedUserSortEnum = {}));
var ReposListForAuthenticatedUserTypeEnum;
(function (ReposListForAuthenticatedUserTypeEnum) {
    ReposListForAuthenticatedUserTypeEnum["All"] = "all";
    ReposListForAuthenticatedUserTypeEnum["Owner"] = "owner";
    ReposListForAuthenticatedUserTypeEnum["Public"] = "public";
    ReposListForAuthenticatedUserTypeEnum["Private"] = "private";
    ReposListForAuthenticatedUserTypeEnum["Member"] = "member";
})(ReposListForAuthenticatedUserTypeEnum = exports.ReposListForAuthenticatedUserTypeEnum || (exports.ReposListForAuthenticatedUserTypeEnum = {}));
var ReposListForAuthenticatedUserVisibilityEnum;
(function (ReposListForAuthenticatedUserVisibilityEnum) {
    ReposListForAuthenticatedUserVisibilityEnum["All"] = "all";
    ReposListForAuthenticatedUserVisibilityEnum["Public"] = "public";
    ReposListForAuthenticatedUserVisibilityEnum["Private"] = "private";
})(ReposListForAuthenticatedUserVisibilityEnum = exports.ReposListForAuthenticatedUserVisibilityEnum || (exports.ReposListForAuthenticatedUserVisibilityEnum = {}));
var ReposListForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserQueryParams, _super);
    function ReposListForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=affiliation" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "affiliation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "before", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserQueryParams.prototype, "visibility", void 0);
    return ReposListForAuthenticatedUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReposListForAuthenticatedUserQueryParams = ReposListForAuthenticatedUserQueryParams;
var ReposListForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserRequest, _super);
    function ReposListForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposListForAuthenticatedUserQueryParams)
    ], ReposListForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return ReposListForAuthenticatedUserRequest;
}(utils_1.SpeakeasyBase));
exports.ReposListForAuthenticatedUserRequest = ReposListForAuthenticatedUserRequest;
var ReposListForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ReposListForAuthenticatedUserResponse, _super);
    function ReposListForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposListForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposListForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposListForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Repository }),
        __metadata("design:type", Array)
    ], ReposListForAuthenticatedUserResponse.prototype, "repositories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposListForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return ReposListForAuthenticatedUserResponse;
}(utils_1.SpeakeasyBase));
exports.ReposListForAuthenticatedUserResponse = ReposListForAuthenticatedUserResponse;
