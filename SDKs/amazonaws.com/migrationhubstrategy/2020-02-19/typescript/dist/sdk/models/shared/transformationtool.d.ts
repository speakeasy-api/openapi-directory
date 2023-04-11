import { SpeakeasyBase } from "../../../internal/utils";
import { TransformationToolNameEnum } from "./transformationtoolnameenum";
/**
 *  Information of the transformation tool that can be used to migrate and modernize the application.
 */
export declare class TransformationTool extends SpeakeasyBase {
    description?: string;
    name?: TransformationToolNameEnum;
    tranformationToolInstallationLink?: string;
}
