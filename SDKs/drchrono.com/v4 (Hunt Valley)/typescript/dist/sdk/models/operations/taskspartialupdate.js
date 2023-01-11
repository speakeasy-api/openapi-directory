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
exports.TasksPartialUpdateResponse = exports.TasksPartialUpdateRequest = exports.TasksPartialUpdateSecurity = exports.TasksPartialUpdateQueryParams = exports.TasksPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TasksPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(TasksPartialUpdatePathParams, _super);
    function TasksPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], TasksPartialUpdatePathParams.prototype, "id", void 0);
    return TasksPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.TasksPartialUpdatePathParams = TasksPartialUpdatePathParams;
var TasksPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TasksPartialUpdateQueryParams, _super);
    function TasksPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_group" }),
        __metadata("design:type", Number)
    ], TasksPartialUpdateQueryParams.prototype, "assigneeGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=assignee_user" }),
        __metadata("design:type", Number)
    ], TasksPartialUpdateQueryParams.prototype, "assigneeUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", Number)
    ], TasksPartialUpdateQueryParams.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_date" }),
        __metadata("design:type", String)
    ], TasksPartialUpdateQueryParams.prototype, "dueAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_range" }),
        __metadata("design:type", String)
    ], TasksPartialUpdateQueryParams.prototype, "dueAtRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_since" }),
        __metadata("design:type", String)
    ], TasksPartialUpdateQueryParams.prototype, "dueAtSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=due_at_unknown" }),
        __metadata("design:type", String)
    ], TasksPartialUpdateQueryParams.prototype, "dueAtUnknown", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], TasksPartialUpdateQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Number)
    ], TasksPartialUpdateQueryParams.prototype, "status", void 0);
    return TasksPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.TasksPartialUpdateQueryParams = TasksPartialUpdateQueryParams;
var TasksPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(TasksPartialUpdateSecurity, _super);
    function TasksPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], TasksPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return TasksPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.TasksPartialUpdateSecurity = TasksPartialUpdateSecurity;
var TasksPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(TasksPartialUpdateRequest, _super);
    function TasksPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksPartialUpdatePathParams)
    ], TasksPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksPartialUpdateQueryParams)
    ], TasksPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TasksPartialUpdateSecurity)
    ], TasksPartialUpdateRequest.prototype, "security", void 0);
    return TasksPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.TasksPartialUpdateRequest = TasksPartialUpdateRequest;
var TasksPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(TasksPartialUpdateResponse, _super);
    function TasksPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TasksPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TasksPartialUpdateResponse.prototype, "statusCode", void 0);
    return TasksPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.TasksPartialUpdateResponse = TasksPartialUpdateResponse;
