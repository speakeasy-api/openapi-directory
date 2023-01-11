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
exports.TaskCategoriesListResponse = exports.TaskCategoriesListRequest = exports.TaskCategoriesList200ApplicationJson = exports.TaskCategoriesListSecurity = exports.TaskCategoriesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TaskCategoriesListQueryParams = /** @class */ (function (_super) {
    __extends(TaskCategoriesListQueryParams, _super);
    function TaskCategoriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], TaskCategoriesListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], TaskCategoriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], TaskCategoriesListQueryParams.prototype, "since", void 0);
    return TaskCategoriesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.TaskCategoriesListQueryParams = TaskCategoriesListQueryParams;
var TaskCategoriesListSecurity = /** @class */ (function (_super) {
    __extends(TaskCategoriesListSecurity, _super);
    function TaskCategoriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], TaskCategoriesListSecurity.prototype, "drchronoOauth2", void 0);
    return TaskCategoriesListSecurity;
}(utils_1.SpeakeasyBase));
exports.TaskCategoriesListSecurity = TaskCategoriesListSecurity;
// TaskCategoriesList200ApplicationJson
/**
 * Paginated Result
**/
var TaskCategoriesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(TaskCategoriesList200ApplicationJson, _super);
    function TaskCategoriesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.TaskCategory }),
        __metadata("design:type", Array)
    ], TaskCategoriesList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], TaskCategoriesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], TaskCategoriesList200ApplicationJson.prototype, "previous", void 0);
    return TaskCategoriesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TaskCategoriesList200ApplicationJson = TaskCategoriesList200ApplicationJson;
var TaskCategoriesListRequest = /** @class */ (function (_super) {
    __extends(TaskCategoriesListRequest, _super);
    function TaskCategoriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TaskCategoriesListQueryParams)
    ], TaskCategoriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TaskCategoriesListSecurity)
    ], TaskCategoriesListRequest.prototype, "security", void 0);
    return TaskCategoriesListRequest;
}(utils_1.SpeakeasyBase));
exports.TaskCategoriesListRequest = TaskCategoriesListRequest;
var TaskCategoriesListResponse = /** @class */ (function (_super) {
    __extends(TaskCategoriesListResponse, _super);
    function TaskCategoriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TaskCategoriesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TaskCategoriesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TaskCategoriesList200ApplicationJson)
    ], TaskCategoriesListResponse.prototype, "taskCategoriesList200ApplicationJSONObject", void 0);
    return TaskCategoriesListResponse;
}(utils_1.SpeakeasyBase));
exports.TaskCategoriesListResponse = TaskCategoriesListResponse;
