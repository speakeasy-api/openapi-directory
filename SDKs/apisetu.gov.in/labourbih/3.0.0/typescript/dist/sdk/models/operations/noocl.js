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
exports.NooclResponse = exports.NooclRequest = exports.Noocl504ApplicationJson = exports.Noocl504ApplicationJsonErrorDescriptionEnum = exports.Noocl504ApplicationJsonErrorEnum = exports.Noocl503ApplicationJson = exports.Noocl503ApplicationJsonErrorDescriptionEnum = exports.Noocl503ApplicationJsonErrorEnum = exports.Noocl502ApplicationJson = exports.Noocl502ApplicationJsonErrorDescriptionEnum = exports.Noocl502ApplicationJsonErrorEnum = exports.Noocl500ApplicationJson = exports.Noocl500ApplicationJsonErrorDescriptionEnum = exports.Noocl500ApplicationJsonErrorEnum = exports.Noocl404ApplicationJson = exports.Noocl404ApplicationJsonErrorDescriptionEnum = exports.Noocl404ApplicationJsonErrorEnum = exports.Noocl401ApplicationJson = exports.Noocl401ApplicationJsonErrorDescriptionEnum = exports.Noocl401ApplicationJsonErrorEnum = exports.Noocl400ApplicationJson = exports.Noocl400ApplicationJsonErrorDescriptionEnum = exports.Noocl400ApplicationJsonErrorEnum = exports.NooclSecurity = exports.NooclRequestBody = exports.NooclRequestBodyFormatEnum = exports.NooclRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NooclRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NooclRequestBodyCertificateParameters, _super);
    function NooclRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], NooclRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], NooclRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return NooclRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NooclRequestBodyCertificateParameters = NooclRequestBodyCertificateParameters;
var NooclRequestBodyFormatEnum;
(function (NooclRequestBodyFormatEnum) {
    NooclRequestBodyFormatEnum["Pdf"] = "pdf";
})(NooclRequestBodyFormatEnum = exports.NooclRequestBodyFormatEnum || (exports.NooclRequestBodyFormatEnum = {}));
var NooclRequestBody = /** @class */ (function (_super) {
    __extends(NooclRequestBody, _super);
    function NooclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NooclRequestBodyCertificateParameters)
    ], NooclRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NooclRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NooclRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NooclRequestBody.prototype, "txnId", void 0);
    return NooclRequestBody;
}(utils_1.SpeakeasyBase));
exports.NooclRequestBody = NooclRequestBody;
var NooclSecurity = /** @class */ (function (_super) {
    __extends(NooclSecurity, _super);
    function NooclSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NooclSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NooclSecurity.prototype, "clientId", void 0);
    return NooclSecurity;
}(utils_1.SpeakeasyBase));
exports.NooclSecurity = NooclSecurity;
var Noocl400ApplicationJsonErrorEnum;
(function (Noocl400ApplicationJsonErrorEnum) {
    Noocl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Noocl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Noocl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Noocl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Noocl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Noocl400ApplicationJsonErrorEnum = exports.Noocl400ApplicationJsonErrorEnum || (exports.Noocl400ApplicationJsonErrorEnum = {}));
var Noocl400ApplicationJsonErrorDescriptionEnum;
(function (Noocl400ApplicationJsonErrorDescriptionEnum) {
    Noocl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Noocl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Noocl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Noocl400ApplicationJsonErrorDescriptionEnum = exports.Noocl400ApplicationJsonErrorDescriptionEnum || (exports.Noocl400ApplicationJsonErrorDescriptionEnum = {}));
var Noocl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl400ApplicationJson, _super);
    function Noocl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl400ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl400ApplicationJson = Noocl400ApplicationJson;
var Noocl401ApplicationJsonErrorEnum;
(function (Noocl401ApplicationJsonErrorEnum) {
    Noocl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Noocl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Noocl401ApplicationJsonErrorEnum = exports.Noocl401ApplicationJsonErrorEnum || (exports.Noocl401ApplicationJsonErrorEnum = {}));
var Noocl401ApplicationJsonErrorDescriptionEnum;
(function (Noocl401ApplicationJsonErrorDescriptionEnum) {
    Noocl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Noocl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Noocl401ApplicationJsonErrorDescriptionEnum = exports.Noocl401ApplicationJsonErrorDescriptionEnum || (exports.Noocl401ApplicationJsonErrorDescriptionEnum = {}));
var Noocl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl401ApplicationJson, _super);
    function Noocl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl401ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl401ApplicationJson = Noocl401ApplicationJson;
var Noocl404ApplicationJsonErrorEnum;
(function (Noocl404ApplicationJsonErrorEnum) {
    Noocl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Noocl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Noocl404ApplicationJsonErrorEnum = exports.Noocl404ApplicationJsonErrorEnum || (exports.Noocl404ApplicationJsonErrorEnum = {}));
var Noocl404ApplicationJsonErrorDescriptionEnum;
(function (Noocl404ApplicationJsonErrorDescriptionEnum) {
    Noocl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Noocl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Noocl404ApplicationJsonErrorDescriptionEnum = exports.Noocl404ApplicationJsonErrorDescriptionEnum || (exports.Noocl404ApplicationJsonErrorDescriptionEnum = {}));
var Noocl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl404ApplicationJson, _super);
    function Noocl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl404ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl404ApplicationJson = Noocl404ApplicationJson;
var Noocl500ApplicationJsonErrorEnum;
(function (Noocl500ApplicationJsonErrorEnum) {
    Noocl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Noocl500ApplicationJsonErrorEnum = exports.Noocl500ApplicationJsonErrorEnum || (exports.Noocl500ApplicationJsonErrorEnum = {}));
var Noocl500ApplicationJsonErrorDescriptionEnum;
(function (Noocl500ApplicationJsonErrorDescriptionEnum) {
    Noocl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Noocl500ApplicationJsonErrorDescriptionEnum = exports.Noocl500ApplicationJsonErrorDescriptionEnum || (exports.Noocl500ApplicationJsonErrorDescriptionEnum = {}));
var Noocl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl500ApplicationJson, _super);
    function Noocl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl500ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl500ApplicationJson = Noocl500ApplicationJson;
var Noocl502ApplicationJsonErrorEnum;
(function (Noocl502ApplicationJsonErrorEnum) {
    Noocl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Noocl502ApplicationJsonErrorEnum = exports.Noocl502ApplicationJsonErrorEnum || (exports.Noocl502ApplicationJsonErrorEnum = {}));
var Noocl502ApplicationJsonErrorDescriptionEnum;
(function (Noocl502ApplicationJsonErrorDescriptionEnum) {
    Noocl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Noocl502ApplicationJsonErrorDescriptionEnum = exports.Noocl502ApplicationJsonErrorDescriptionEnum || (exports.Noocl502ApplicationJsonErrorDescriptionEnum = {}));
var Noocl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl502ApplicationJson, _super);
    function Noocl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl502ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl502ApplicationJson = Noocl502ApplicationJson;
var Noocl503ApplicationJsonErrorEnum;
(function (Noocl503ApplicationJsonErrorEnum) {
    Noocl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Noocl503ApplicationJsonErrorEnum = exports.Noocl503ApplicationJsonErrorEnum || (exports.Noocl503ApplicationJsonErrorEnum = {}));
var Noocl503ApplicationJsonErrorDescriptionEnum;
(function (Noocl503ApplicationJsonErrorDescriptionEnum) {
    Noocl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Noocl503ApplicationJsonErrorDescriptionEnum = exports.Noocl503ApplicationJsonErrorDescriptionEnum || (exports.Noocl503ApplicationJsonErrorDescriptionEnum = {}));
var Noocl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl503ApplicationJson, _super);
    function Noocl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl503ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl503ApplicationJson = Noocl503ApplicationJson;
var Noocl504ApplicationJsonErrorEnum;
(function (Noocl504ApplicationJsonErrorEnum) {
    Noocl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Noocl504ApplicationJsonErrorEnum = exports.Noocl504ApplicationJsonErrorEnum || (exports.Noocl504ApplicationJsonErrorEnum = {}));
var Noocl504ApplicationJsonErrorDescriptionEnum;
(function (Noocl504ApplicationJsonErrorDescriptionEnum) {
    Noocl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Noocl504ApplicationJsonErrorDescriptionEnum = exports.Noocl504ApplicationJsonErrorDescriptionEnum || (exports.Noocl504ApplicationJsonErrorDescriptionEnum = {}));
var Noocl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Noocl504ApplicationJson, _super);
    function Noocl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Noocl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Noocl504ApplicationJson.prototype, "errorDescription", void 0);
    return Noocl504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Noocl504ApplicationJson = Noocl504ApplicationJson;
var NooclRequest = /** @class */ (function (_super) {
    __extends(NooclRequest, _super);
    function NooclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NooclRequestBody)
    ], NooclRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NooclSecurity)
    ], NooclRequest.prototype, "security", void 0);
    return NooclRequest;
}(utils_1.SpeakeasyBase));
exports.NooclRequest = NooclRequest;
var NooclResponse = /** @class */ (function (_super) {
    __extends(NooclResponse, _super);
    function NooclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NooclResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NooclResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl400ApplicationJson)
    ], NooclResponse.prototype, "noocl400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl401ApplicationJson)
    ], NooclResponse.prototype, "noocl401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl404ApplicationJson)
    ], NooclResponse.prototype, "noocl404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl500ApplicationJson)
    ], NooclResponse.prototype, "noocl500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl502ApplicationJson)
    ], NooclResponse.prototype, "noocl502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl503ApplicationJson)
    ], NooclResponse.prototype, "noocl503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Noocl504ApplicationJson)
    ], NooclResponse.prototype, "noocl504ApplicationJSONObject", void 0);
    return NooclResponse;
}(utils_1.SpeakeasyBase));
exports.NooclResponse = NooclResponse;
