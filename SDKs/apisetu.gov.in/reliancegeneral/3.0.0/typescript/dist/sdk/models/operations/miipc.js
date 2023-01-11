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
exports.MiipcResponse = exports.MiipcRequest = exports.Miipc504ApplicationJson = exports.Miipc504ApplicationJsonErrorDescriptionEnum = exports.Miipc504ApplicationJsonErrorEnum = exports.Miipc503ApplicationJson = exports.Miipc503ApplicationJsonErrorDescriptionEnum = exports.Miipc503ApplicationJsonErrorEnum = exports.Miipc502ApplicationJson = exports.Miipc502ApplicationJsonErrorDescriptionEnum = exports.Miipc502ApplicationJsonErrorEnum = exports.Miipc500ApplicationJson = exports.Miipc500ApplicationJsonErrorDescriptionEnum = exports.Miipc500ApplicationJsonErrorEnum = exports.Miipc404ApplicationJson = exports.Miipc404ApplicationJsonErrorDescriptionEnum = exports.Miipc404ApplicationJsonErrorEnum = exports.Miipc401ApplicationJson = exports.Miipc401ApplicationJsonErrorDescriptionEnum = exports.Miipc401ApplicationJsonErrorEnum = exports.Miipc400ApplicationJson = exports.Miipc400ApplicationJsonErrorDescriptionEnum = exports.Miipc400ApplicationJsonErrorEnum = exports.MiipcSecurity = exports.MiipcRequestBody = exports.MiipcRequestBodyFormatEnum = exports.MiipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MiipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MiipcRequestBodyCertificateParameters, _super);
    function MiipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GENDER" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PolicyNo" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "policyNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PolicyType" }),
        __metadata("design:type", String)
    ], MiipcRequestBodyCertificateParameters.prototype, "policyType", void 0);
    return MiipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MiipcRequestBodyCertificateParameters = MiipcRequestBodyCertificateParameters;
var MiipcRequestBodyFormatEnum;
(function (MiipcRequestBodyFormatEnum) {
    MiipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(MiipcRequestBodyFormatEnum = exports.MiipcRequestBodyFormatEnum || (exports.MiipcRequestBodyFormatEnum = {}));
var MiipcRequestBody = /** @class */ (function (_super) {
    __extends(MiipcRequestBody, _super);
    function MiipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MiipcRequestBodyCertificateParameters)
    ], MiipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MiipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MiipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MiipcRequestBody.prototype, "txnId", void 0);
    return MiipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.MiipcRequestBody = MiipcRequestBody;
var MiipcSecurity = /** @class */ (function (_super) {
    __extends(MiipcSecurity, _super);
    function MiipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MiipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MiipcSecurity.prototype, "clientId", void 0);
    return MiipcSecurity;
}(utils_1.SpeakeasyBase));
exports.MiipcSecurity = MiipcSecurity;
var Miipc400ApplicationJsonErrorEnum;
(function (Miipc400ApplicationJsonErrorEnum) {
    Miipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Miipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Miipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Miipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Miipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Miipc400ApplicationJsonErrorEnum = exports.Miipc400ApplicationJsonErrorEnum || (exports.Miipc400ApplicationJsonErrorEnum = {}));
var Miipc400ApplicationJsonErrorDescriptionEnum;
(function (Miipc400ApplicationJsonErrorDescriptionEnum) {
    Miipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Miipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Miipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Miipc400ApplicationJsonErrorDescriptionEnum = exports.Miipc400ApplicationJsonErrorDescriptionEnum || (exports.Miipc400ApplicationJsonErrorDescriptionEnum = {}));
var Miipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc400ApplicationJson, _super);
    function Miipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc400ApplicationJson = Miipc400ApplicationJson;
var Miipc401ApplicationJsonErrorEnum;
(function (Miipc401ApplicationJsonErrorEnum) {
    Miipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Miipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Miipc401ApplicationJsonErrorEnum = exports.Miipc401ApplicationJsonErrorEnum || (exports.Miipc401ApplicationJsonErrorEnum = {}));
var Miipc401ApplicationJsonErrorDescriptionEnum;
(function (Miipc401ApplicationJsonErrorDescriptionEnum) {
    Miipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Miipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Miipc401ApplicationJsonErrorDescriptionEnum = exports.Miipc401ApplicationJsonErrorDescriptionEnum || (exports.Miipc401ApplicationJsonErrorDescriptionEnum = {}));
var Miipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc401ApplicationJson, _super);
    function Miipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc401ApplicationJson = Miipc401ApplicationJson;
var Miipc404ApplicationJsonErrorEnum;
(function (Miipc404ApplicationJsonErrorEnum) {
    Miipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Miipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Miipc404ApplicationJsonErrorEnum = exports.Miipc404ApplicationJsonErrorEnum || (exports.Miipc404ApplicationJsonErrorEnum = {}));
var Miipc404ApplicationJsonErrorDescriptionEnum;
(function (Miipc404ApplicationJsonErrorDescriptionEnum) {
    Miipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Miipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Miipc404ApplicationJsonErrorDescriptionEnum = exports.Miipc404ApplicationJsonErrorDescriptionEnum || (exports.Miipc404ApplicationJsonErrorDescriptionEnum = {}));
var Miipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc404ApplicationJson, _super);
    function Miipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc404ApplicationJson = Miipc404ApplicationJson;
var Miipc500ApplicationJsonErrorEnum;
(function (Miipc500ApplicationJsonErrorEnum) {
    Miipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Miipc500ApplicationJsonErrorEnum = exports.Miipc500ApplicationJsonErrorEnum || (exports.Miipc500ApplicationJsonErrorEnum = {}));
var Miipc500ApplicationJsonErrorDescriptionEnum;
(function (Miipc500ApplicationJsonErrorDescriptionEnum) {
    Miipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Miipc500ApplicationJsonErrorDescriptionEnum = exports.Miipc500ApplicationJsonErrorDescriptionEnum || (exports.Miipc500ApplicationJsonErrorDescriptionEnum = {}));
var Miipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc500ApplicationJson, _super);
    function Miipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc500ApplicationJson = Miipc500ApplicationJson;
var Miipc502ApplicationJsonErrorEnum;
(function (Miipc502ApplicationJsonErrorEnum) {
    Miipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Miipc502ApplicationJsonErrorEnum = exports.Miipc502ApplicationJsonErrorEnum || (exports.Miipc502ApplicationJsonErrorEnum = {}));
var Miipc502ApplicationJsonErrorDescriptionEnum;
(function (Miipc502ApplicationJsonErrorDescriptionEnum) {
    Miipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Miipc502ApplicationJsonErrorDescriptionEnum = exports.Miipc502ApplicationJsonErrorDescriptionEnum || (exports.Miipc502ApplicationJsonErrorDescriptionEnum = {}));
var Miipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc502ApplicationJson, _super);
    function Miipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc502ApplicationJson = Miipc502ApplicationJson;
var Miipc503ApplicationJsonErrorEnum;
(function (Miipc503ApplicationJsonErrorEnum) {
    Miipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Miipc503ApplicationJsonErrorEnum = exports.Miipc503ApplicationJsonErrorEnum || (exports.Miipc503ApplicationJsonErrorEnum = {}));
var Miipc503ApplicationJsonErrorDescriptionEnum;
(function (Miipc503ApplicationJsonErrorDescriptionEnum) {
    Miipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Miipc503ApplicationJsonErrorDescriptionEnum = exports.Miipc503ApplicationJsonErrorDescriptionEnum || (exports.Miipc503ApplicationJsonErrorDescriptionEnum = {}));
var Miipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc503ApplicationJson, _super);
    function Miipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc503ApplicationJson = Miipc503ApplicationJson;
var Miipc504ApplicationJsonErrorEnum;
(function (Miipc504ApplicationJsonErrorEnum) {
    Miipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Miipc504ApplicationJsonErrorEnum = exports.Miipc504ApplicationJsonErrorEnum || (exports.Miipc504ApplicationJsonErrorEnum = {}));
var Miipc504ApplicationJsonErrorDescriptionEnum;
(function (Miipc504ApplicationJsonErrorDescriptionEnum) {
    Miipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Miipc504ApplicationJsonErrorDescriptionEnum = exports.Miipc504ApplicationJsonErrorDescriptionEnum || (exports.Miipc504ApplicationJsonErrorDescriptionEnum = {}));
var Miipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Miipc504ApplicationJson, _super);
    function Miipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Miipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Miipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Miipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Miipc504ApplicationJson = Miipc504ApplicationJson;
var MiipcRequest = /** @class */ (function (_super) {
    __extends(MiipcRequest, _super);
    function MiipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MiipcRequestBody)
    ], MiipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MiipcSecurity)
    ], MiipcRequest.prototype, "security", void 0);
    return MiipcRequest;
}(utils_1.SpeakeasyBase));
exports.MiipcRequest = MiipcRequest;
var MiipcResponse = /** @class */ (function (_super) {
    __extends(MiipcResponse, _super);
    function MiipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MiipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MiipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc400ApplicationJson)
    ], MiipcResponse.prototype, "miipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc401ApplicationJson)
    ], MiipcResponse.prototype, "miipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc404ApplicationJson)
    ], MiipcResponse.prototype, "miipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc500ApplicationJson)
    ], MiipcResponse.prototype, "miipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc502ApplicationJson)
    ], MiipcResponse.prototype, "miipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc503ApplicationJson)
    ], MiipcResponse.prototype, "miipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Miipc504ApplicationJson)
    ], MiipcResponse.prototype, "miipc504ApplicationJSONObject", void 0);
    return MiipcResponse;
}(utils_1.SpeakeasyBase));
exports.MiipcResponse = MiipcResponse;
