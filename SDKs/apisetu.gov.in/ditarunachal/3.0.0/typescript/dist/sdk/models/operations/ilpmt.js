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
exports.IlpmtResponse = exports.IlpmtRequest = exports.Ilpmt504ApplicationJson = exports.Ilpmt504ApplicationJsonErrorDescriptionEnum = exports.Ilpmt504ApplicationJsonErrorEnum = exports.Ilpmt503ApplicationJson = exports.Ilpmt503ApplicationJsonErrorDescriptionEnum = exports.Ilpmt503ApplicationJsonErrorEnum = exports.Ilpmt502ApplicationJson = exports.Ilpmt502ApplicationJsonErrorDescriptionEnum = exports.Ilpmt502ApplicationJsonErrorEnum = exports.Ilpmt500ApplicationJson = exports.Ilpmt500ApplicationJsonErrorDescriptionEnum = exports.Ilpmt500ApplicationJsonErrorEnum = exports.Ilpmt404ApplicationJson = exports.Ilpmt404ApplicationJsonErrorDescriptionEnum = exports.Ilpmt404ApplicationJsonErrorEnum = exports.Ilpmt401ApplicationJson = exports.Ilpmt401ApplicationJsonErrorDescriptionEnum = exports.Ilpmt401ApplicationJsonErrorEnum = exports.Ilpmt400ApplicationJson = exports.Ilpmt400ApplicationJsonErrorDescriptionEnum = exports.Ilpmt400ApplicationJsonErrorEnum = exports.IlpmtSecurity = exports.IlpmtRequestBody = exports.IlpmtRequestBodyFormatEnum = exports.IlpmtRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IlpmtRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IlpmtRequestBodyCertificateParameters, _super);
    function IlpmtRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eILPAppId" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "eILPAppId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eILPContactNumber" }),
        __metadata("design:type", String)
    ], IlpmtRequestBodyCertificateParameters.prototype, "eILPContactNumber", void 0);
    return IlpmtRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.IlpmtRequestBodyCertificateParameters = IlpmtRequestBodyCertificateParameters;
var IlpmtRequestBodyFormatEnum;
(function (IlpmtRequestBodyFormatEnum) {
    IlpmtRequestBodyFormatEnum["Pdf"] = "pdf";
})(IlpmtRequestBodyFormatEnum = exports.IlpmtRequestBodyFormatEnum || (exports.IlpmtRequestBodyFormatEnum = {}));
var IlpmtRequestBody = /** @class */ (function (_super) {
    __extends(IlpmtRequestBody, _super);
    function IlpmtRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IlpmtRequestBodyCertificateParameters)
    ], IlpmtRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IlpmtRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IlpmtRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IlpmtRequestBody.prototype, "txnId", void 0);
    return IlpmtRequestBody;
}(utils_1.SpeakeasyBase));
exports.IlpmtRequestBody = IlpmtRequestBody;
var IlpmtSecurity = /** @class */ (function (_super) {
    __extends(IlpmtSecurity, _super);
    function IlpmtSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IlpmtSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IlpmtSecurity.prototype, "clientId", void 0);
    return IlpmtSecurity;
}(utils_1.SpeakeasyBase));
exports.IlpmtSecurity = IlpmtSecurity;
var Ilpmt400ApplicationJsonErrorEnum;
(function (Ilpmt400ApplicationJsonErrorEnum) {
    Ilpmt400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ilpmt400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ilpmt400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ilpmt400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ilpmt400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ilpmt400ApplicationJsonErrorEnum = exports.Ilpmt400ApplicationJsonErrorEnum || (exports.Ilpmt400ApplicationJsonErrorEnum = {}));
var Ilpmt400ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt400ApplicationJsonErrorDescriptionEnum) {
    Ilpmt400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ilpmt400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ilpmt400ApplicationJsonErrorDescriptionEnum = exports.Ilpmt400ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt400ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt400ApplicationJson, _super);
    function Ilpmt400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt400ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt400ApplicationJson = Ilpmt400ApplicationJson;
var Ilpmt401ApplicationJsonErrorEnum;
(function (Ilpmt401ApplicationJsonErrorEnum) {
    Ilpmt401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ilpmt401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ilpmt401ApplicationJsonErrorEnum = exports.Ilpmt401ApplicationJsonErrorEnum || (exports.Ilpmt401ApplicationJsonErrorEnum = {}));
var Ilpmt401ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt401ApplicationJsonErrorDescriptionEnum) {
    Ilpmt401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ilpmt401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ilpmt401ApplicationJsonErrorDescriptionEnum = exports.Ilpmt401ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt401ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt401ApplicationJson, _super);
    function Ilpmt401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt401ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt401ApplicationJson = Ilpmt401ApplicationJson;
var Ilpmt404ApplicationJsonErrorEnum;
(function (Ilpmt404ApplicationJsonErrorEnum) {
    Ilpmt404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ilpmt404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ilpmt404ApplicationJsonErrorEnum = exports.Ilpmt404ApplicationJsonErrorEnum || (exports.Ilpmt404ApplicationJsonErrorEnum = {}));
var Ilpmt404ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt404ApplicationJsonErrorDescriptionEnum) {
    Ilpmt404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ilpmt404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ilpmt404ApplicationJsonErrorDescriptionEnum = exports.Ilpmt404ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt404ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt404ApplicationJson, _super);
    function Ilpmt404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt404ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt404ApplicationJson = Ilpmt404ApplicationJson;
var Ilpmt500ApplicationJsonErrorEnum;
(function (Ilpmt500ApplicationJsonErrorEnum) {
    Ilpmt500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ilpmt500ApplicationJsonErrorEnum = exports.Ilpmt500ApplicationJsonErrorEnum || (exports.Ilpmt500ApplicationJsonErrorEnum = {}));
var Ilpmt500ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt500ApplicationJsonErrorDescriptionEnum) {
    Ilpmt500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ilpmt500ApplicationJsonErrorDescriptionEnum = exports.Ilpmt500ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt500ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt500ApplicationJson, _super);
    function Ilpmt500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt500ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt500ApplicationJson = Ilpmt500ApplicationJson;
var Ilpmt502ApplicationJsonErrorEnum;
(function (Ilpmt502ApplicationJsonErrorEnum) {
    Ilpmt502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ilpmt502ApplicationJsonErrorEnum = exports.Ilpmt502ApplicationJsonErrorEnum || (exports.Ilpmt502ApplicationJsonErrorEnum = {}));
var Ilpmt502ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt502ApplicationJsonErrorDescriptionEnum) {
    Ilpmt502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ilpmt502ApplicationJsonErrorDescriptionEnum = exports.Ilpmt502ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt502ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt502ApplicationJson, _super);
    function Ilpmt502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt502ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt502ApplicationJson = Ilpmt502ApplicationJson;
var Ilpmt503ApplicationJsonErrorEnum;
(function (Ilpmt503ApplicationJsonErrorEnum) {
    Ilpmt503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ilpmt503ApplicationJsonErrorEnum = exports.Ilpmt503ApplicationJsonErrorEnum || (exports.Ilpmt503ApplicationJsonErrorEnum = {}));
var Ilpmt503ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt503ApplicationJsonErrorDescriptionEnum) {
    Ilpmt503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ilpmt503ApplicationJsonErrorDescriptionEnum = exports.Ilpmt503ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt503ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt503ApplicationJson, _super);
    function Ilpmt503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt503ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt503ApplicationJson = Ilpmt503ApplicationJson;
var Ilpmt504ApplicationJsonErrorEnum;
(function (Ilpmt504ApplicationJsonErrorEnum) {
    Ilpmt504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ilpmt504ApplicationJsonErrorEnum = exports.Ilpmt504ApplicationJsonErrorEnum || (exports.Ilpmt504ApplicationJsonErrorEnum = {}));
var Ilpmt504ApplicationJsonErrorDescriptionEnum;
(function (Ilpmt504ApplicationJsonErrorDescriptionEnum) {
    Ilpmt504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ilpmt504ApplicationJsonErrorDescriptionEnum = exports.Ilpmt504ApplicationJsonErrorDescriptionEnum || (exports.Ilpmt504ApplicationJsonErrorDescriptionEnum = {}));
var Ilpmt504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ilpmt504ApplicationJson, _super);
    function Ilpmt504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ilpmt504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ilpmt504ApplicationJson.prototype, "errorDescription", void 0);
    return Ilpmt504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ilpmt504ApplicationJson = Ilpmt504ApplicationJson;
var IlpmtRequest = /** @class */ (function (_super) {
    __extends(IlpmtRequest, _super);
    function IlpmtRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IlpmtRequestBody)
    ], IlpmtRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IlpmtSecurity)
    ], IlpmtRequest.prototype, "security", void 0);
    return IlpmtRequest;
}(utils_1.SpeakeasyBase));
exports.IlpmtRequest = IlpmtRequest;
var IlpmtResponse = /** @class */ (function (_super) {
    __extends(IlpmtResponse, _super);
    function IlpmtResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IlpmtResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IlpmtResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt400ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt401ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt404ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt500ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt502ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt503ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ilpmt504ApplicationJson)
    ], IlpmtResponse.prototype, "ilpmt504ApplicationJSONObject", void 0);
    return IlpmtResponse;
}(utils_1.SpeakeasyBase));
exports.IlpmtResponse = IlpmtResponse;
