import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
 */
export declare class DescribeAnalysisSchemesRequest extends SpeakeasyBase {
    analysisSchemeNames?: string[];
    deployed?: boolean;
    domainName: string;
}
