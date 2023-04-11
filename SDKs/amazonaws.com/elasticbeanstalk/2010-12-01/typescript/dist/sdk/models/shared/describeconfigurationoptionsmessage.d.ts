import { SpeakeasyBase } from "../../../internal/utils";
import { OptionSpecification } from "./optionspecification";
/**
 * Result message containing a list of application version descriptions.
 */
export declare class DescribeConfigurationOptionsMessage extends SpeakeasyBase {
    applicationName?: string;
    environmentName?: string;
    options?: OptionSpecification[];
    platformArn?: string;
    solutionStackName?: string;
    templateName?: string;
}
