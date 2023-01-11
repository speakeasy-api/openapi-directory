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
exports.ActivityListRepoNotificationsForAuthenticatedUserResponse = exports.ActivityListRepoNotificationsForAuthenticatedUserRequest = exports.ActivityListRepoNotificationsForAuthenticatedUserQueryParams = exports.ActivityListRepoNotificationsForAuthenticatedUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ActivityListRepoNotificationsForAuthenticatedUserPathParams = /** @class */ (function (_super) {
    __extends(ActivityListRepoNotificationsForAuthenticatedUserPathParams, _super);
    function ActivityListRepoNotificationsForAuthenticatedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ActivityListRepoNotificationsForAuthenticatedUserPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ActivityListRepoNotificationsForAuthenticatedUserPathParams.prototype, "repo", void 0);
    return ActivityListRepoNotificationsForAuthenticatedUserPathParams;
}(utils_1.SpeakeasyBase));
exports.ActivityListRepoNotificationsForAuthenticatedUserPathParams = ActivityListRepoNotificationsForAuthenticatedUserPathParams;
var ActivityListRepoNotificationsForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListRepoNotificationsForAuthenticatedUserQueryParams, _super);
    function ActivityListRepoNotificationsForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "all", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=before" }),
        __metadata("design:type", Date)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "before", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=participating" }),
        __metadata("design:type", Boolean)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "participating", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", Date)
    ], ActivityListRepoNotificationsForAuthenticatedUserQueryParams.prototype, "since", void 0);
    return ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.ActivityListRepoNotificationsForAuthenticatedUserQueryParams = ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
var ActivityListRepoNotificationsForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ActivityListRepoNotificationsForAuthenticatedUserRequest, _super);
    function ActivityListRepoNotificationsForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivityListRepoNotificationsForAuthenticatedUserPathParams)
    ], ActivityListRepoNotificationsForAuthenticatedUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ActivityListRepoNotificationsForAuthenticatedUserQueryParams)
    ], ActivityListRepoNotificationsForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return ActivityListRepoNotificationsForAuthenticatedUserRequest;
}(utils_1.SpeakeasyBase));
exports.ActivityListRepoNotificationsForAuthenticatedUserRequest = ActivityListRepoNotificationsForAuthenticatedUserRequest;
var ActivityListRepoNotificationsForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ActivityListRepoNotificationsForAuthenticatedUserResponse, _super);
    function ActivityListRepoNotificationsForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ActivityListRepoNotificationsForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ActivityListRepoNotificationsForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ActivityListRepoNotificationsForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Thread }),
        __metadata("design:type", Array)
    ], ActivityListRepoNotificationsForAuthenticatedUserResponse.prototype, "threads", void 0);
    return ActivityListRepoNotificationsForAuthenticatedUserResponse;
}(utils_1.SpeakeasyBase));
exports.ActivityListRepoNotificationsForAuthenticatedUserResponse = ActivityListRepoNotificationsForAuthenticatedUserResponse;
