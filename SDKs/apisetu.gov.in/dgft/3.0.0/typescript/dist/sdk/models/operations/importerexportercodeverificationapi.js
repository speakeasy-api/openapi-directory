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
exports.ImporterExporterCodeVerificationApiResponse = exports.ImporterExporterCodeVerificationApiRequest = exports.ImporterExporterCodeVerificationApi504ApplicationJson = exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi503ApplicationJson = exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi502ApplicationJson = exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi500ApplicationJson = exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi404ApplicationJson = exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi401ApplicationJson = exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi400ApplicationJson = exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi200ApplicationJson = exports.ImporterExporterCodeVerificationApiSecurity = exports.ImporterExporterCodeVerificationApiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImporterExporterCodeVerificationApiPathParams = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiPathParams, _super);
    function ImporterExporterCodeVerificationApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=iec" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApiPathParams.prototype, "iec", void 0);
    return ImporterExporterCodeVerificationApiPathParams;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApiPathParams = ImporterExporterCodeVerificationApiPathParams;
var ImporterExporterCodeVerificationApiSecurity = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiSecurity, _super);
    function ImporterExporterCodeVerificationApiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ImporterExporterCodeVerificationApiSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ImporterExporterCodeVerificationApiSecurity.prototype, "clientId", void 0);
    return ImporterExporterCodeVerificationApiSecurity;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApiSecurity = ImporterExporterCodeVerificationApiSecurity;
var ImporterExporterCodeVerificationApi200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi200ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", Array)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataAsOn" }),
        __metadata("design:type", Date)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "dataAsOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directors" }),
        __metadata("design:type", Array)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "directors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entityName" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "entityName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exporterType" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "exporterType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iec" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iecIssueDate" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecIssueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iecModificationDate" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecModificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iecStatus" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "iecStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=natureOfConcern" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "natureOfConcern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pan" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "pan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pin" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "pin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi200ApplicationJson.prototype, "state", void 0);
    return ImporterExporterCodeVerificationApi200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi200ApplicationJson = ImporterExporterCodeVerificationApi200ApplicationJson;
var ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid parameter";
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum["MissingParameter"] = "missing parameter";
})(ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters.";
})(ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi400ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi400ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi400ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi400ApplicationJson = ImporterExporterCodeVerificationApi400ApplicationJson;
var ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi401ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi401ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi401ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi401ApplicationJson = ImporterExporterCodeVerificationApi401ApplicationJson;
var ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum["UrlNotFound"] = "Url not found";
})(ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect.";
})(ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi404ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi404ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi404ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi404ApplicationJson = ImporterExporterCodeVerificationApi404ApplicationJson;
var ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi500ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi500ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi500ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi500ApplicationJson = ImporterExporterCodeVerificationApi500ApplicationJson;
var ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum["BadGateway"] = "bad gateway";
})(ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response.";
})(ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi502ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi502ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi502ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi502ApplicationJson = ImporterExporterCodeVerificationApi502ApplicationJson;
var ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi503ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi503ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi503ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi503ApplicationJson = ImporterExporterCodeVerificationApi503ApplicationJson;
var ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum;
(function (ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum) {
    ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum = exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum || (exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum = {}));
var ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum;
(function (ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum) {
    ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum = exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum || (exports.ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum = {}));
var ImporterExporterCodeVerificationApi504ApplicationJson = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApi504ApplicationJson, _super);
    function ImporterExporterCodeVerificationApi504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApi504ApplicationJson.prototype, "errorDescription", void 0);
    return ImporterExporterCodeVerificationApi504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApi504ApplicationJson = ImporterExporterCodeVerificationApi504ApplicationJson;
var ImporterExporterCodeVerificationApiRequest = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiRequest, _super);
    function ImporterExporterCodeVerificationApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApiPathParams)
    ], ImporterExporterCodeVerificationApiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApiSecurity)
    ], ImporterExporterCodeVerificationApiRequest.prototype, "security", void 0);
    return ImporterExporterCodeVerificationApiRequest;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApiRequest = ImporterExporterCodeVerificationApiRequest;
var ImporterExporterCodeVerificationApiResponse = /** @class */ (function (_super) {
    __extends(ImporterExporterCodeVerificationApiResponse, _super);
    function ImporterExporterCodeVerificationApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi200ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi400ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi401ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi404ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi500ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi502ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi503ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImporterExporterCodeVerificationApi504ApplicationJson)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "importerExporterCodeVerificationAPI504ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImporterExporterCodeVerificationApiResponse.prototype, "statusCode", void 0);
    return ImporterExporterCodeVerificationApiResponse;
}(utils_1.SpeakeasyBase));
exports.ImporterExporterCodeVerificationApiResponse = ImporterExporterCodeVerificationApiResponse;
