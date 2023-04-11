import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdPayrollsRequest extends SpeakeasyBase {
    /**
     * begin date of the payrolls
     */
    begin?: string;
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * end date of the payrolls
     */
    end?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder social
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdPayrollsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of payrolls of the folder social
     */
    getSpacesSpaceIdFoldersIdPayrolls200ApplicationJSONAllOfs?: shared.Payroll[];
}
