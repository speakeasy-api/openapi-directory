package openapisdk.models.shared;


public enum DeploymentCommandNameEnum {
    INSTALL_DEPENDENCIES("install_dependencies"),
    UPDATE_DEPENDENCIES("update_dependencies"),
    UPDATE_CUSTOM_COOKBOOKS("update_custom_cookbooks"),
    EXECUTE_RECIPES("execute_recipes"),
    CONFIGURE("configure"),
    SETUP("setup"),
    DEPLOY("deploy"),
    ROLLBACK("rollback"),
    START("start"),
    STOP("stop"),
    RESTART("restart"),
    UNDEPLOY("undeploy");

    public final String value;

    private DeploymentCommandNameEnum(String value) {
        this.value = value;
    }
}
