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
exports.IssuesUpdateMilestoneResponse = exports.IssuesUpdateMilestoneRequest = exports.IssuesUpdateMilestoneRequestBody = exports.IssuesUpdateMilestoneRequestBodyStateEnum = exports.IssuesUpdateMilestonePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IssuesUpdateMilestonePathParams = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestonePathParams, _super);
    function IssuesUpdateMilestonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=milestone_number" }),
        __metadata("design:type", Number)
    ], IssuesUpdateMilestonePathParams.prototype, "milestoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestonePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestonePathParams.prototype, "repo", void 0);
    return IssuesUpdateMilestonePathParams;
}(utils_1.SpeakeasyBase));
exports.IssuesUpdateMilestonePathParams = IssuesUpdateMilestonePathParams;
var IssuesUpdateMilestoneRequestBodyStateEnum;
(function (IssuesUpdateMilestoneRequestBodyStateEnum) {
    IssuesUpdateMilestoneRequestBodyStateEnum["Open"] = "open";
    IssuesUpdateMilestoneRequestBodyStateEnum["Closed"] = "closed";
})(IssuesUpdateMilestoneRequestBodyStateEnum = exports.IssuesUpdateMilestoneRequestBodyStateEnum || (exports.IssuesUpdateMilestoneRequestBodyStateEnum = {}));
var IssuesUpdateMilestoneRequestBody = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneRequestBody, _super);
    function IssuesUpdateMilestoneRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_on" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "dueOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneRequestBody.prototype, "title", void 0);
    return IssuesUpdateMilestoneRequestBody;
}(utils_1.SpeakeasyBase));
exports.IssuesUpdateMilestoneRequestBody = IssuesUpdateMilestoneRequestBody;
var IssuesUpdateMilestoneRequest = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneRequest, _super);
    function IssuesUpdateMilestoneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IssuesUpdateMilestonePathParams)
    ], IssuesUpdateMilestoneRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IssuesUpdateMilestoneRequestBody)
    ], IssuesUpdateMilestoneRequest.prototype, "request", void 0);
    return IssuesUpdateMilestoneRequest;
}(utils_1.SpeakeasyBase));
exports.IssuesUpdateMilestoneRequest = IssuesUpdateMilestoneRequest;
var IssuesUpdateMilestoneResponse = /** @class */ (function (_super) {
    __extends(IssuesUpdateMilestoneResponse, _super);
    function IssuesUpdateMilestoneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IssuesUpdateMilestoneResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IssuesUpdateMilestoneResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Milestone)
    ], IssuesUpdateMilestoneResponse.prototype, "milestone", void 0);
    return IssuesUpdateMilestoneResponse;
}(utils_1.SpeakeasyBase));
exports.IssuesUpdateMilestoneResponse = IssuesUpdateMilestoneResponse;
