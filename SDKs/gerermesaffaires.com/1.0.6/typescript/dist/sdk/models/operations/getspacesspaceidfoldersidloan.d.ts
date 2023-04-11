import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdLoanRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdLoanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A loan folder
     */
    loan?: shared.Loan;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
