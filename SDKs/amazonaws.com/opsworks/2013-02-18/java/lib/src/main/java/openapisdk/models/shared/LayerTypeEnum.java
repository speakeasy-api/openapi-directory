package openapisdk.models.shared;


public enum LayerTypeEnum {
    AWS_FLOW_RUBY("aws-flow-ruby"),
    ECS_CLUSTER("ecs-cluster"),
    JAVA_APP("java-app"),
    LB("lb"),
    WEB("web"),
    PHP_APP("php-app"),
    RAILS_APP("rails-app"),
    NODEJS_APP("nodejs-app"),
    MEMCACHED("memcached"),
    DB_MASTER("db-master"),
    MONITORING_MASTER("monitoring-master"),
    CUSTOM("custom");

    public final String value;

    private LayerTypeEnum(String value) {
        this.value = value;
    }
}
