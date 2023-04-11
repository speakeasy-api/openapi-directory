import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequestBodyStatusEnum {
    Waiting = "waiting",
    Ended = "ended",
    Validated = "validated"
}
/**
 * Status to modify
 */
export declare class PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequestBody extends SpeakeasyBase {
    status?: PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequestBodyStatusEnum;
}
export declare class PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequest extends SpeakeasyBase {
    /**
     * Status to modify
     */
    requestBody: PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidRequestBody;
    /**
     * Id of the folder exchange or followup
     */
    id: string;
    /**
     * Id of the requireddocument
     */
    requireddocumentid: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdRequiredDocumentsRequireddocumentidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
