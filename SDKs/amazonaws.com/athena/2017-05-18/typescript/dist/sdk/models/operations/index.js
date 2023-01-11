"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./batchgetnamedquery"), exports);
__exportStar(require("./batchgetqueryexecution"), exports);
__exportStar(require("./createdatacatalog"), exports);
__exportStar(require("./createnamedquery"), exports);
__exportStar(require("./createpreparedstatement"), exports);
__exportStar(require("./createworkgroup"), exports);
__exportStar(require("./deletedatacatalog"), exports);
__exportStar(require("./deletenamedquery"), exports);
__exportStar(require("./deletepreparedstatement"), exports);
__exportStar(require("./deleteworkgroup"), exports);
__exportStar(require("./getdatabase"), exports);
__exportStar(require("./getdatacatalog"), exports);
__exportStar(require("./getnamedquery"), exports);
__exportStar(require("./getpreparedstatement"), exports);
__exportStar(require("./getqueryexecution"), exports);
__exportStar(require("./getqueryresults"), exports);
__exportStar(require("./gettablemetadata"), exports);
__exportStar(require("./getworkgroup"), exports);
__exportStar(require("./listdatabases"), exports);
__exportStar(require("./listdatacatalogs"), exports);
__exportStar(require("./listengineversions"), exports);
__exportStar(require("./listnamedqueries"), exports);
__exportStar(require("./listpreparedstatements"), exports);
__exportStar(require("./listqueryexecutions"), exports);
__exportStar(require("./listtablemetadata"), exports);
__exportStar(require("./listtagsforresource"), exports);
__exportStar(require("./listworkgroups"), exports);
__exportStar(require("./startqueryexecution"), exports);
__exportStar(require("./stopqueryexecution"), exports);
__exportStar(require("./tagresource"), exports);
__exportStar(require("./untagresource"), exports);
__exportStar(require("./updatedatacatalog"), exports);
__exportStar(require("./updatepreparedstatement"), exports);
__exportStar(require("./updateworkgroup"), exports);
