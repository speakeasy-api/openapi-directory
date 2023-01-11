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
exports.AddUserForTeamResponse = exports.AddUserForTeamRequest = exports.AddUserForTeam200ApplicationJson = exports.AddUserForTeamRequestBody = exports.AddUserForTeamQueryParams = exports.AddUserForTeamPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AddUserForTeamPathParams = /** @class */ (function (_super) {
    __extends(AddUserForTeamPathParams, _super);
    function AddUserForTeamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_gid" }),
        __metadata("design:type", String)
    ], AddUserForTeamPathParams.prototype, "teamGid", void 0);
    return AddUserForTeamPathParams;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeamPathParams = AddUserForTeamPathParams;
var AddUserForTeamQueryParams = /** @class */ (function (_super) {
    __extends(AddUserForTeamQueryParams, _super);
    function AddUserForTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], AddUserForTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], AddUserForTeamQueryParams.prototype, "optPretty", void 0);
    return AddUserForTeamQueryParams;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeamQueryParams = AddUserForTeamQueryParams;
var AddUserForTeamRequestBody = /** @class */ (function (_super) {
    __extends(AddUserForTeamRequestBody, _super);
    function AddUserForTeamRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.TeamAddUserRequest)
    ], AddUserForTeamRequestBody.prototype, "data", void 0);
    return AddUserForTeamRequestBody;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeamRequestBody = AddUserForTeamRequestBody;
var AddUserForTeam200ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserForTeam200ApplicationJson, _super);
    function AddUserForTeam200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.UserResponse)
    ], AddUserForTeam200ApplicationJson.prototype, "data", void 0);
    return AddUserForTeam200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeam200ApplicationJson = AddUserForTeam200ApplicationJson;
var AddUserForTeamRequest = /** @class */ (function (_super) {
    __extends(AddUserForTeamRequest, _super);
    function AddUserForTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserForTeamPathParams)
    ], AddUserForTeamRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserForTeamQueryParams)
    ], AddUserForTeamRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddUserForTeamRequestBody)
    ], AddUserForTeamRequest.prototype, "request", void 0);
    return AddUserForTeamRequest;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeamRequest = AddUserForTeamRequest;
var AddUserForTeamResponse = /** @class */ (function (_super) {
    __extends(AddUserForTeamResponse, _super);
    function AddUserForTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddUserForTeamResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], AddUserForTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddUserForTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddUserForTeam200ApplicationJson)
    ], AddUserForTeamResponse.prototype, "addUserForTeam200ApplicationJSONObject", void 0);
    return AddUserForTeamResponse;
}(utils_1.SpeakeasyBase));
exports.AddUserForTeamResponse = AddUserForTeamResponse;
