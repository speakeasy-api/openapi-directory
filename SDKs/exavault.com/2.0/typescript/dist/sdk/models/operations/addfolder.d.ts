import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddFolderHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class AddFolderAddFolderRequestBody extends SpeakeasyBase {
    name?: string;
    parentResource?: string;
    path?: string;
}
export declare class AddFolderRequest extends SpeakeasyBase {
    headers: AddFolderHeaders;
    request?: AddFolderAddFolderRequestBody;
}
export declare class AddFolderResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
