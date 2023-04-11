import { SpeakeasyBase } from "../../../internal/utils";
import { UserDefinedFunction } from "./userdefinedfunction";
/**
 * Success
 */
export declare class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
    nextToken?: string;
    userDefinedFunctions?: UserDefinedFunction[];
}
