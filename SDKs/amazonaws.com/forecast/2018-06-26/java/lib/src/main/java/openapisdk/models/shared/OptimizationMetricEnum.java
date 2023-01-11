package openapisdk.models.shared;


public enum OptimizationMetricEnum {
    WAPE("WAPE"),
    RMSE("RMSE"),
    AVERAGE_WEIGHTED_QUANTILE_LOSS("AverageWeightedQuantileLoss"),
    MASE("MASE"),
    MAPE("MAPE");

    public final String value;

    private OptimizationMetricEnum(String value) {
        this.value = value;
    }
}
