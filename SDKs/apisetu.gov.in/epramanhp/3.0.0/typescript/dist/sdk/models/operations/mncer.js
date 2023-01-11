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
exports.MncerResponse = exports.MncerRequest = exports.Mncer504ApplicationJson = exports.Mncer504ApplicationJsonErrorDescriptionEnum = exports.Mncer504ApplicationJsonErrorEnum = exports.Mncer503ApplicationJson = exports.Mncer503ApplicationJsonErrorDescriptionEnum = exports.Mncer503ApplicationJsonErrorEnum = exports.Mncer502ApplicationJson = exports.Mncer502ApplicationJsonErrorDescriptionEnum = exports.Mncer502ApplicationJsonErrorEnum = exports.Mncer500ApplicationJson = exports.Mncer500ApplicationJsonErrorDescriptionEnum = exports.Mncer500ApplicationJsonErrorEnum = exports.Mncer404ApplicationJson = exports.Mncer404ApplicationJsonErrorDescriptionEnum = exports.Mncer404ApplicationJsonErrorEnum = exports.Mncer401ApplicationJson = exports.Mncer401ApplicationJsonErrorDescriptionEnum = exports.Mncer401ApplicationJsonErrorEnum = exports.Mncer400ApplicationJson = exports.Mncer400ApplicationJsonErrorDescriptionEnum = exports.Mncer400ApplicationJsonErrorEnum = exports.MncerSecurity = exports.MncerRequestBody = exports.MncerRequestBodyFormatEnum = exports.MncerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MncerRequestBodyCertificateParameters, _super);
    function MncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], MncerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], MncerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return MncerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MncerRequestBodyCertificateParameters = MncerRequestBodyCertificateParameters;
var MncerRequestBodyFormatEnum;
(function (MncerRequestBodyFormatEnum) {
    MncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MncerRequestBodyFormatEnum = exports.MncerRequestBodyFormatEnum || (exports.MncerRequestBodyFormatEnum = {}));
var MncerRequestBody = /** @class */ (function (_super) {
    __extends(MncerRequestBody, _super);
    function MncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MncerRequestBodyCertificateParameters)
    ], MncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MncerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MncerRequestBody.prototype, "txnId", void 0);
    return MncerRequestBody;
}(utils_1.SpeakeasyBase));
exports.MncerRequestBody = MncerRequestBody;
var MncerSecurity = /** @class */ (function (_super) {
    __extends(MncerSecurity, _super);
    function MncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MncerSecurity.prototype, "clientId", void 0);
    return MncerSecurity;
}(utils_1.SpeakeasyBase));
exports.MncerSecurity = MncerSecurity;
var Mncer400ApplicationJsonErrorEnum;
(function (Mncer400ApplicationJsonErrorEnum) {
    Mncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mncer400ApplicationJsonErrorEnum = exports.Mncer400ApplicationJsonErrorEnum || (exports.Mncer400ApplicationJsonErrorEnum = {}));
var Mncer400ApplicationJsonErrorDescriptionEnum;
(function (Mncer400ApplicationJsonErrorDescriptionEnum) {
    Mncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mncer400ApplicationJsonErrorDescriptionEnum = exports.Mncer400ApplicationJsonErrorDescriptionEnum || (exports.Mncer400ApplicationJsonErrorDescriptionEnum = {}));
var Mncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer400ApplicationJson, _super);
    function Mncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer400ApplicationJson = Mncer400ApplicationJson;
var Mncer401ApplicationJsonErrorEnum;
(function (Mncer401ApplicationJsonErrorEnum) {
    Mncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mncer401ApplicationJsonErrorEnum = exports.Mncer401ApplicationJsonErrorEnum || (exports.Mncer401ApplicationJsonErrorEnum = {}));
var Mncer401ApplicationJsonErrorDescriptionEnum;
(function (Mncer401ApplicationJsonErrorDescriptionEnum) {
    Mncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mncer401ApplicationJsonErrorDescriptionEnum = exports.Mncer401ApplicationJsonErrorDescriptionEnum || (exports.Mncer401ApplicationJsonErrorDescriptionEnum = {}));
var Mncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer401ApplicationJson, _super);
    function Mncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer401ApplicationJson = Mncer401ApplicationJson;
var Mncer404ApplicationJsonErrorEnum;
(function (Mncer404ApplicationJsonErrorEnum) {
    Mncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mncer404ApplicationJsonErrorEnum = exports.Mncer404ApplicationJsonErrorEnum || (exports.Mncer404ApplicationJsonErrorEnum = {}));
var Mncer404ApplicationJsonErrorDescriptionEnum;
(function (Mncer404ApplicationJsonErrorDescriptionEnum) {
    Mncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mncer404ApplicationJsonErrorDescriptionEnum = exports.Mncer404ApplicationJsonErrorDescriptionEnum || (exports.Mncer404ApplicationJsonErrorDescriptionEnum = {}));
var Mncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer404ApplicationJson, _super);
    function Mncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer404ApplicationJson = Mncer404ApplicationJson;
var Mncer500ApplicationJsonErrorEnum;
(function (Mncer500ApplicationJsonErrorEnum) {
    Mncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mncer500ApplicationJsonErrorEnum = exports.Mncer500ApplicationJsonErrorEnum || (exports.Mncer500ApplicationJsonErrorEnum = {}));
var Mncer500ApplicationJsonErrorDescriptionEnum;
(function (Mncer500ApplicationJsonErrorDescriptionEnum) {
    Mncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mncer500ApplicationJsonErrorDescriptionEnum = exports.Mncer500ApplicationJsonErrorDescriptionEnum || (exports.Mncer500ApplicationJsonErrorDescriptionEnum = {}));
var Mncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer500ApplicationJson, _super);
    function Mncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer500ApplicationJson = Mncer500ApplicationJson;
var Mncer502ApplicationJsonErrorEnum;
(function (Mncer502ApplicationJsonErrorEnum) {
    Mncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mncer502ApplicationJsonErrorEnum = exports.Mncer502ApplicationJsonErrorEnum || (exports.Mncer502ApplicationJsonErrorEnum = {}));
var Mncer502ApplicationJsonErrorDescriptionEnum;
(function (Mncer502ApplicationJsonErrorDescriptionEnum) {
    Mncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mncer502ApplicationJsonErrorDescriptionEnum = exports.Mncer502ApplicationJsonErrorDescriptionEnum || (exports.Mncer502ApplicationJsonErrorDescriptionEnum = {}));
var Mncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer502ApplicationJson, _super);
    function Mncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer502ApplicationJson = Mncer502ApplicationJson;
var Mncer503ApplicationJsonErrorEnum;
(function (Mncer503ApplicationJsonErrorEnum) {
    Mncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mncer503ApplicationJsonErrorEnum = exports.Mncer503ApplicationJsonErrorEnum || (exports.Mncer503ApplicationJsonErrorEnum = {}));
var Mncer503ApplicationJsonErrorDescriptionEnum;
(function (Mncer503ApplicationJsonErrorDescriptionEnum) {
    Mncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mncer503ApplicationJsonErrorDescriptionEnum = exports.Mncer503ApplicationJsonErrorDescriptionEnum || (exports.Mncer503ApplicationJsonErrorDescriptionEnum = {}));
var Mncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer503ApplicationJson, _super);
    function Mncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer503ApplicationJson = Mncer503ApplicationJson;
var Mncer504ApplicationJsonErrorEnum;
(function (Mncer504ApplicationJsonErrorEnum) {
    Mncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mncer504ApplicationJsonErrorEnum = exports.Mncer504ApplicationJsonErrorEnum || (exports.Mncer504ApplicationJsonErrorEnum = {}));
var Mncer504ApplicationJsonErrorDescriptionEnum;
(function (Mncer504ApplicationJsonErrorDescriptionEnum) {
    Mncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mncer504ApplicationJsonErrorDescriptionEnum = exports.Mncer504ApplicationJsonErrorDescriptionEnum || (exports.Mncer504ApplicationJsonErrorDescriptionEnum = {}));
var Mncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mncer504ApplicationJson, _super);
    function Mncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Mncer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mncer504ApplicationJson = Mncer504ApplicationJson;
var MncerRequest = /** @class */ (function (_super) {
    __extends(MncerRequest, _super);
    function MncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MncerRequestBody)
    ], MncerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MncerSecurity)
    ], MncerRequest.prototype, "security", void 0);
    return MncerRequest;
}(utils_1.SpeakeasyBase));
exports.MncerRequest = MncerRequest;
var MncerResponse = /** @class */ (function (_super) {
    __extends(MncerResponse, _super);
    function MncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MncerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MncerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer400ApplicationJson)
    ], MncerResponse.prototype, "mncer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer401ApplicationJson)
    ], MncerResponse.prototype, "mncer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer404ApplicationJson)
    ], MncerResponse.prototype, "mncer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer500ApplicationJson)
    ], MncerResponse.prototype, "mncer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer502ApplicationJson)
    ], MncerResponse.prototype, "mncer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer503ApplicationJson)
    ], MncerResponse.prototype, "mncer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mncer504ApplicationJson)
    ], MncerResponse.prototype, "mncer504ApplicationJSONObject", void 0);
    return MncerResponse;
}(utils_1.SpeakeasyBase));
exports.MncerResponse = MncerResponse;
