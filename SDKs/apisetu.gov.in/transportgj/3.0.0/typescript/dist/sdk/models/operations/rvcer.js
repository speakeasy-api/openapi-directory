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
exports.RvcerResponse = exports.RvcerRequest = exports.Rvcer504ApplicationJson = exports.Rvcer504ApplicationJsonErrorDescriptionEnum = exports.Rvcer504ApplicationJsonErrorEnum = exports.Rvcer503ApplicationJson = exports.Rvcer503ApplicationJsonErrorDescriptionEnum = exports.Rvcer503ApplicationJsonErrorEnum = exports.Rvcer502ApplicationJson = exports.Rvcer502ApplicationJsonErrorDescriptionEnum = exports.Rvcer502ApplicationJsonErrorEnum = exports.Rvcer500ApplicationJson = exports.Rvcer500ApplicationJsonErrorDescriptionEnum = exports.Rvcer500ApplicationJsonErrorEnum = exports.Rvcer404ApplicationJson = exports.Rvcer404ApplicationJsonErrorDescriptionEnum = exports.Rvcer404ApplicationJsonErrorEnum = exports.Rvcer401ApplicationJson = exports.Rvcer401ApplicationJsonErrorDescriptionEnum = exports.Rvcer401ApplicationJsonErrorEnum = exports.Rvcer400ApplicationJson = exports.Rvcer400ApplicationJsonErrorDescriptionEnum = exports.Rvcer400ApplicationJsonErrorEnum = exports.RvcerSecurity = exports.RvcerRequestBody = exports.RvcerRequestBodyFormatEnum = exports.RvcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RvcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RvcerRequestBodyCertificateParameters, _super);
    function RvcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], RvcerRequestBodyCertificateParameters.prototype, "regNo", void 0);
    return RvcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RvcerRequestBodyCertificateParameters = RvcerRequestBodyCertificateParameters;
var RvcerRequestBodyFormatEnum;
(function (RvcerRequestBodyFormatEnum) {
    RvcerRequestBodyFormatEnum["Xml"] = "xml";
    RvcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RvcerRequestBodyFormatEnum = exports.RvcerRequestBodyFormatEnum || (exports.RvcerRequestBodyFormatEnum = {}));
var RvcerRequestBody = /** @class */ (function (_super) {
    __extends(RvcerRequestBody, _super);
    function RvcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RvcerRequestBodyCertificateParameters)
    ], RvcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RvcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RvcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RvcerRequestBody.prototype, "txnId", void 0);
    return RvcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RvcerRequestBody = RvcerRequestBody;
var RvcerSecurity = /** @class */ (function (_super) {
    __extends(RvcerSecurity, _super);
    function RvcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RvcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RvcerSecurity.prototype, "clientId", void 0);
    return RvcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RvcerSecurity = RvcerSecurity;
var Rvcer400ApplicationJsonErrorEnum;
(function (Rvcer400ApplicationJsonErrorEnum) {
    Rvcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rvcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rvcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rvcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rvcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rvcer400ApplicationJsonErrorEnum = exports.Rvcer400ApplicationJsonErrorEnum || (exports.Rvcer400ApplicationJsonErrorEnum = {}));
var Rvcer400ApplicationJsonErrorDescriptionEnum;
(function (Rvcer400ApplicationJsonErrorDescriptionEnum) {
    Rvcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rvcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rvcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rvcer400ApplicationJsonErrorDescriptionEnum = exports.Rvcer400ApplicationJsonErrorDescriptionEnum || (exports.Rvcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer400ApplicationJson, _super);
    function Rvcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer400ApplicationJson = Rvcer400ApplicationJson;
var Rvcer401ApplicationJsonErrorEnum;
(function (Rvcer401ApplicationJsonErrorEnum) {
    Rvcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rvcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rvcer401ApplicationJsonErrorEnum = exports.Rvcer401ApplicationJsonErrorEnum || (exports.Rvcer401ApplicationJsonErrorEnum = {}));
var Rvcer401ApplicationJsonErrorDescriptionEnum;
(function (Rvcer401ApplicationJsonErrorDescriptionEnum) {
    Rvcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rvcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rvcer401ApplicationJsonErrorDescriptionEnum = exports.Rvcer401ApplicationJsonErrorDescriptionEnum || (exports.Rvcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer401ApplicationJson, _super);
    function Rvcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer401ApplicationJson = Rvcer401ApplicationJson;
var Rvcer404ApplicationJsonErrorEnum;
(function (Rvcer404ApplicationJsonErrorEnum) {
    Rvcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rvcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rvcer404ApplicationJsonErrorEnum = exports.Rvcer404ApplicationJsonErrorEnum || (exports.Rvcer404ApplicationJsonErrorEnum = {}));
var Rvcer404ApplicationJsonErrorDescriptionEnum;
(function (Rvcer404ApplicationJsonErrorDescriptionEnum) {
    Rvcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rvcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rvcer404ApplicationJsonErrorDescriptionEnum = exports.Rvcer404ApplicationJsonErrorDescriptionEnum || (exports.Rvcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer404ApplicationJson, _super);
    function Rvcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer404ApplicationJson = Rvcer404ApplicationJson;
var Rvcer500ApplicationJsonErrorEnum;
(function (Rvcer500ApplicationJsonErrorEnum) {
    Rvcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rvcer500ApplicationJsonErrorEnum = exports.Rvcer500ApplicationJsonErrorEnum || (exports.Rvcer500ApplicationJsonErrorEnum = {}));
var Rvcer500ApplicationJsonErrorDescriptionEnum;
(function (Rvcer500ApplicationJsonErrorDescriptionEnum) {
    Rvcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rvcer500ApplicationJsonErrorDescriptionEnum = exports.Rvcer500ApplicationJsonErrorDescriptionEnum || (exports.Rvcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer500ApplicationJson, _super);
    function Rvcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer500ApplicationJson = Rvcer500ApplicationJson;
var Rvcer502ApplicationJsonErrorEnum;
(function (Rvcer502ApplicationJsonErrorEnum) {
    Rvcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rvcer502ApplicationJsonErrorEnum = exports.Rvcer502ApplicationJsonErrorEnum || (exports.Rvcer502ApplicationJsonErrorEnum = {}));
var Rvcer502ApplicationJsonErrorDescriptionEnum;
(function (Rvcer502ApplicationJsonErrorDescriptionEnum) {
    Rvcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rvcer502ApplicationJsonErrorDescriptionEnum = exports.Rvcer502ApplicationJsonErrorDescriptionEnum || (exports.Rvcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer502ApplicationJson, _super);
    function Rvcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer502ApplicationJson = Rvcer502ApplicationJson;
var Rvcer503ApplicationJsonErrorEnum;
(function (Rvcer503ApplicationJsonErrorEnum) {
    Rvcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rvcer503ApplicationJsonErrorEnum = exports.Rvcer503ApplicationJsonErrorEnum || (exports.Rvcer503ApplicationJsonErrorEnum = {}));
var Rvcer503ApplicationJsonErrorDescriptionEnum;
(function (Rvcer503ApplicationJsonErrorDescriptionEnum) {
    Rvcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rvcer503ApplicationJsonErrorDescriptionEnum = exports.Rvcer503ApplicationJsonErrorDescriptionEnum || (exports.Rvcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer503ApplicationJson, _super);
    function Rvcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer503ApplicationJson = Rvcer503ApplicationJson;
var Rvcer504ApplicationJsonErrorEnum;
(function (Rvcer504ApplicationJsonErrorEnum) {
    Rvcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rvcer504ApplicationJsonErrorEnum = exports.Rvcer504ApplicationJsonErrorEnum || (exports.Rvcer504ApplicationJsonErrorEnum = {}));
var Rvcer504ApplicationJsonErrorDescriptionEnum;
(function (Rvcer504ApplicationJsonErrorDescriptionEnum) {
    Rvcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rvcer504ApplicationJsonErrorDescriptionEnum = exports.Rvcer504ApplicationJsonErrorDescriptionEnum || (exports.Rvcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rvcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rvcer504ApplicationJson, _super);
    function Rvcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rvcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rvcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rvcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rvcer504ApplicationJson = Rvcer504ApplicationJson;
var RvcerRequest = /** @class */ (function (_super) {
    __extends(RvcerRequest, _super);
    function RvcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RvcerRequestBody)
    ], RvcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RvcerSecurity)
    ], RvcerRequest.prototype, "security", void 0);
    return RvcerRequest;
}(utils_1.SpeakeasyBase));
exports.RvcerRequest = RvcerRequest;
var RvcerResponse = /** @class */ (function (_super) {
    __extends(RvcerResponse, _super);
    function RvcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], RvcerResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RvcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RvcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer400ApplicationJson)
    ], RvcerResponse.prototype, "rvcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer401ApplicationJson)
    ], RvcerResponse.prototype, "rvcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer404ApplicationJson)
    ], RvcerResponse.prototype, "rvcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer500ApplicationJson)
    ], RvcerResponse.prototype, "rvcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer502ApplicationJson)
    ], RvcerResponse.prototype, "rvcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer503ApplicationJson)
    ], RvcerResponse.prototype, "rvcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rvcer504ApplicationJson)
    ], RvcerResponse.prototype, "rvcer504ApplicationJSONObject", void 0);
    return RvcerResponse;
}(utils_1.SpeakeasyBase));
exports.RvcerResponse = RvcerResponse;
