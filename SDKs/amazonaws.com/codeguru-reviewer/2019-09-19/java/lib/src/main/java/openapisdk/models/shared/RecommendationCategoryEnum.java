package openapisdk.models.shared;


public enum RecommendationCategoryEnum {
    AWS_BEST_PRACTICES("AWSBestPractices"),
    AWS_CLOUD_FORMATION_ISSUES("AWSCloudFormationIssues"),
    DUPLICATE_CODE("DuplicateCode"),
    CODE_MAINTENANCE_ISSUES("CodeMaintenanceIssues"),
    CONCURRENCY_ISSUES("ConcurrencyIssues"),
    INPUT_VALIDATIONS("InputValidations"),
    PYTHON_BEST_PRACTICES("PythonBestPractices"),
    JAVA_BEST_PRACTICES("JavaBestPractices"),
    RESOURCE_LEAKS("ResourceLeaks"),
    SECURITY_ISSUES("SecurityIssues"),
    CODE_INCONSISTENCIES("CodeInconsistencies");

    public final String value;

    private RecommendationCategoryEnum(String value) {
        this.value = value;
    }
}
