import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationRequest extends SpeakeasyBase {
    /**
     * Id of the folder social
     */
    id: string;
    /**
     * Id of the payroll
     */
    payrollId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class DeleteSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
