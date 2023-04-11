import { SpeakeasyBase } from "../../../internal/utils";
import { CommitTransactionRequest } from "./committransactionrequest";
import { ExecuteStatementRequest } from "./executestatementrequest";
import { FetchPageRequest } from "./fetchpagerequest";
import { StartSessionRequest } from "./startsessionrequest";
export declare class SendCommandRequest extends SpeakeasyBase {
    abortTransaction?: Record<string, any>;
    commitTransaction?: CommitTransactionRequest;
    endSession?: Record<string, any>;
    executeStatement?: ExecuteStatementRequest;
    fetchPage?: FetchPageRequest;
    sessionToken?: string;
    startSession?: StartSessionRequest;
    startTransaction?: Record<string, any>;
}
