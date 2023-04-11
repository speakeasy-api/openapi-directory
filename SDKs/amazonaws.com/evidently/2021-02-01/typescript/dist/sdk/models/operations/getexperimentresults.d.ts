import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>, which uses the mean of the collected values as the statistic.
 */
export declare enum GetExperimentResultsRequestBodyBaseStatEnum {
    Mean = "Mean"
}
export declare class GetExperimentResultsRequestBody extends SpeakeasyBase {
    /**
     * The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>, which uses the mean of the collected values as the statistic.
     */
    baseStat?: GetExperimentResultsRequestBodyBaseStatEnum;
    /**
     * The date and time that the experiment ended, if it is completed. This must be no longer than 30 days after the experiment start time.
     */
    endTime?: Date;
    /**
     * The names of the experiment metrics that you want to see the results of.
     */
    metricNames: string[];
    /**
     * In seconds, the amount of time to aggregate results together.
     */
    period?: number;
    /**
     * The names of the report types that you want to see. Currently, <code>BayesianInference</code> is the only valid value.
     */
    reportNames?: shared.ExperimentReportNameEnum[];
    /**
     * <p>The statistics that you want to see in the returned results.</p> <ul> <li> <p> <code>PValue</code> specifies to use p-values for the results. A p-value is used in hypothesis testing to measure how often you are willing to make a mistake in rejecting the null hypothesis. A general practice is to reject the null hypothesis and declare that the results are statistically significant when the p-value is less than 0.05.</p> </li> <li> <p> <code>ConfidenceInterval</code> specifies a confidence interval for the results. The confidence interval represents the range of values for the chosen metric that is likely to contain the true difference between the <code>baseStat</code> of a variation and the baseline. Evidently returns the 95% confidence interval. </p> </li> <li> <p> <code>TreatmentEffect</code> is the difference in the statistic specified by the <code>baseStat</code> parameter between each variation and the default variation. </p> </li> <li> <p> <code>BaseStat</code> returns the statistical values collected for the metric for each variation. The statistic uses the same statistic specified in the <code>baseStat</code> parameter. Therefore, if <code>baseStat</code> is <code>mean</code>, this returns the mean of the values collected for each variation.</p> </li> </ul>
     */
    resultStats?: shared.ExperimentResultRequestTypeEnum[];
    /**
     * The date and time that the experiment started.
     */
    startTime?: Date;
    /**
     * The names of the experiment treatments that you want to see the results for.
     */
    treatmentNames: string[];
}
export declare class GetExperimentResultsRequest extends SpeakeasyBase {
    requestBody: GetExperimentResultsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the experiment to retrieve the results of.
     */
    experiment: string;
    /**
     * The name or ARN of the project that contains the experiment that you want to see the results of.
     */
    project: string;
}
export declare class GetExperimentResultsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getExperimentResultsResponse?: shared.GetExperimentResultsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
