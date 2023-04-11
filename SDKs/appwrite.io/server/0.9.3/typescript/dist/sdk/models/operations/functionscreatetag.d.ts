import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsCreateTagSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsCreateTagRequestBody extends SpeakeasyBase {
    /**
     * Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     */
    code: string;
    /**
     * Code execution command.
     */
    command: string;
}
export declare class FunctionsCreateTagRequest extends SpeakeasyBase {
    requestBody?: FunctionsCreateTagRequestBody;
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsCreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tag
     */
    tag?: shared.Tag;
}
