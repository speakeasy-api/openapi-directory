import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdEmployeeRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An employee folder
     */
    employee?: shared.Employee;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
